import { createContext, useContext, useEffect, useRef, useState } from "react";
import api from "@/api/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
    const [user, setUser]               = useState(null);
    const refreshPromiseRef             = useRef(null);
    const isAuthenticated               = !!accessToken;

    const login = async (email, password) => {
        const res = await api.post("/auth/login", { email, password });
        const newAccessToken = res.data?.data?.token || "";
        if (!newAccessToken) {
            throw new Error("No token returned from login");
        }
        localStorage.setItem("accessToken", newAccessToken);
        setAccessToken(newAccessToken);
        return res.data;
    };

    const logout = async () => {
        try {
            await api.post("/auth/logout");
        } catch (error) {
            console.log(error);
        }
        localStorage.removeItem("accessToken");
        setAccessToken("");
        setUser(null);
    };

    const refreshUserToken = async () => {
        if (!refreshPromiseRef.current) {
            refreshPromiseRef.current = api.post("/auth/refresh")
                .then((res) => {
                    const newAccessToken = res.data?.data?.accessToken || "";
                    if (!newAccessToken) {
                        throw new Error("No access token returned");
                    }
                    localStorage.setItem("accessToken", newAccessToken);
                    setAccessToken(newAccessToken);
                    return newAccessToken;
                })
                .catch((error) => {
                    localStorage.removeItem("accessToken");
                    setAccessToken("");
                    setUser(null);
                    throw error;
                })
                .finally(() => {
                    refreshPromiseRef.current = null;
                });
        }
        return refreshPromiseRef.current;
    };

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("accessToken");

                if (token) {
                    config.headers = config.headers || {};
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = api.interceptors.response.use((response) => response,
            async (error) => {
                const originalRequest = error?.config;

                if (!originalRequest) {
                    return Promise.reject(error);
                }

                const isUnauthorized = error?.response?.status === 401;
                const isRefreshCall = originalRequest.url?.includes("/auth/refresh");

                if (isUnauthorized && !originalRequest._retry && !isRefreshCall) {
                    originalRequest._retry = true;

                    try {
                        const newAccessToken = await refreshUserToken();
                        originalRequest.headers = originalRequest.headers || {};
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return api(originalRequest);
                    } catch (refreshError) {
                        localStorage.removeItem("accessToken");
                        setAccessToken("");
                        setUser(null);
                        window.location.href = "/login";
                        return Promise.reject(refreshError);
                    }
                }
                
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    useEffect(() => {
        const bootstrapAuth = async () => {
            const token = localStorage.getItem("accessToken");

            if (!token) {
                try {
                    await refreshUserToken();
                } catch (error) {
                    console.log(error);
                }
            }
        };

        bootstrapAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                user,
                isAuthenticated,
                login,
                logout,
                refreshUserToken,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}