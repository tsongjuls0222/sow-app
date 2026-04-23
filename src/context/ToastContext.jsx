import { createContext, useContext, useState } from "react";
import Toast from "@/components/Toast";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 1500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}