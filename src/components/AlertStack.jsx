function AlertStack({ notifs, removeAlert }) {
  return (
    <div className="my-alert-stack">
      {notifs.map((notif) => (
        <div className={`my-toast my-toast-${notif.type || "success"}`} key={notif.id}>
          <div className="my-toast-icon">{notif.type === "error" ? "!" : "✓"}</div>
          <div className="my-toast-body">
            <strong>{notif.name}</strong>
            <span>{notif.text}</span>
          </div>
          <button type="button" className="my-toast-close" onClick={() => removeAlert(alert.id)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default AlertStack;