import "@/styles/modal.css";

function Modal({ isOpen, title, children, onClose, footer }) {
  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="my-modal-overlay"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      <div className="my-modal-wrap">
        <div className="my-modal-card">
          <div className="my-modal-header">
            <h3>{title}</h3>
            <button
              type="button"
              className="my-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="my-modal-body">{children}</div>

          {footer ? <div className="my-modal-footer">{footer}</div> : null}
        </div>
      </div>
    </>
  );
}

export default Modal;