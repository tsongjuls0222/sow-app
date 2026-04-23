import { createContext, useContext, useRef, useState } from "react";
import Toast from "@/components/Toast";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
    const [toast, setToast]   = useState(null);
    const timerRef            = useRef(null);

    const showToast = (message, type = "success") => {
        if (!message) return;

        if (toast?.message === message) return;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        setToast({ message, type });

        timerRef.current = setTimeout(() => {
            setToast(null);
        }, 1500);
    };

    const removeToast = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        setToast(null);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div
                style={{
                position: "fixed",
                top: 20,
                right: 20,
                zIndex: 9999,
                }}
            >
                <Toast toast={toast} onClose={removeToast} />
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}