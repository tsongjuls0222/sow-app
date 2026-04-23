import { useState } from "react";
import api from "@/api/axios";
import AuthContext from "./AuthContext";
import { useToast } from "@/context/ToastContext";
import { setAccessToken as saveToken, clearAuth as clearStoredAuth } from "@/utils/auth";

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [user, setUser] = useState(null);
  const { showToast } = useToast();

  const isAuthenticated = !!accessToken;

  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data?.data?.token || "";

      if (!token) {
        throw new Error("No token returned");
      }

      saveToken(token);
      setAccessToken(token);

      showToast("Login successful", "success");
      return res.data;
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed";
      showToast(message, "error");
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.log(error);
    }

    clearStoredAuth();
    setAccessToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        user,
        isAuthenticated,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}