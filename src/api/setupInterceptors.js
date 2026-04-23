import api from "./axios";
import { getAccessToken, setAccessToken, clearAuth, redirectToLogin, } from "@/utils/auth";
let isRefreshing = false;
let refreshSubscribers = [];

function onRefreshed(newToken) {
    refreshSubscribers.forEach((callback) => callback(newToken));
    refreshSubscribers = [];
}

function addRefreshSubscriber(callback) {
    refreshSubscribers.push(callback);
}

async function refreshTokenRequest() {
    const res         = await api.post("/auth/refresh");
    const newToken    = res.data?.data?.accessToken || "";

    if (!newToken) {
        throw new Error("No access token returned");
    }

    setAccessToken(newToken);
    return newToken;
}

export function setupInterceptors() {
    api.interceptors.request.use((config) => {
        const token = getAccessToken();

        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },(error) => Promise.reject(error));

    api.interceptors.response.use((response) => response,
        async (error) => {
            const originalRequest = error?.config;
            const status = error?.response?.status;

            if (!originalRequest) {
                return Promise.reject(error);
            }

            const isRefreshCall = originalRequest.url?.includes("/auth/refresh");

            if (status !== 401) {
                return Promise.reject(error);
            }

            if (isRefreshCall) {
                clearAuth();
                redirectToLogin();
                return Promise.reject(error);
            }

            if (originalRequest._retry) {
                clearAuth();
                redirectToLogin();
                return Promise.reject(error);
            }

            if (isRefreshing) {
                return new Promise((resolve) => {
                    addRefreshSubscriber((newToken) => {
                        originalRequest.headers = originalRequest.headers || {};
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        resolve(api(originalRequest));
                    });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newToken = await refreshTokenRequest();
                isRefreshing = false;
                onRefreshed(newToken);

                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newToken}`;

                return api(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                refreshSubscribers = [];
                clearAuth();
                redirectToLogin();
                return Promise.reject(refreshError);
            }
        }
    );
}