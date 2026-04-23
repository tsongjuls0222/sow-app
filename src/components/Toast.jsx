import "@/styles/toast.css";

function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className={`my-toastbox ${toast.type || "success"}`}>
      <div className="my-toastcontent">
        <span>{toast.message}</span>
        <button
          type="button"
          className="my-toastclose-btn"
          onClick={onClose}
          aria-label="Close toast"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;