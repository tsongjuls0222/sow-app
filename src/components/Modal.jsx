import "@/styles/modal.css";
import { FaTimes } from "react-icons/fa";

function Modal({ isOpen, title, children, onClose, footer }) {
  if (!isOpen) return null;

  return (
    <>
      <button type="button" className="my-modal-overlay" aria-label="Close modal overlay" onClick={onClose} />
      <div className="my-modal-wrap">
        <div className="my-modal-card">
          <div className="my-modal-header">
            <h3>{title}</h3>
            <button type="button" aria-label="Close modal" className="my-modal-close-btn" onClick={onClose}><FaTimes /></button>
          </div>
          <div className="my-modal-body">{children}</div>
          {footer ? <div className="my-modal-footer">{footer}</div> : null}
        </div>
      </div>
    </>
  );
}

export default Modal;