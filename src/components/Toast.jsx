import { HiCheckCircle, HiXCircle } from "react-icons/hi";

function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isError = toast.type === "error";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 20px",
        borderRadius: "12px",
        color: "#fff",
        background: isError
          ? "rgba(239, 68, 68, 0.25)"
          : "rgba(34, 197, 94, 0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: isError
          ? "1px solid rgba(239, 68, 68, 0.6)"
          : "1px solid rgba(34, 197, 94, 0.6)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
        zIndex: 9999,
        cursor: "pointer",
        fontWeight: 500,
        animation: "toastSlide 0.3s ease",
      }}
    >
      {isError ? (
        <HiXCircle size={22} color="#f87171" />
      ) : (
        <HiCheckCircle size={22} color="#4ade80" />
      )}
      <span>{toast.message}</span>
      <style>
        {`
          @keyframes toastSlide {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Toast;