import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupInterceptors } from "@/api/setupInterceptors";
import { ToastProvider } from "@/context/ToastContext";
import { AuthProvider } from "@/context/AuthProvider";
import "@/styles/global.css";

setupInterceptors();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);