import React from "react";
import logo from "../Logo/Logo";
const Toast = ({ mensajeToast }) => {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src={logo} class="rounded me-2" alt="logo Amneweb" />
        <strong className="me-auto">¡Gracias!!</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{mensajeToast}</div>
    </div>
  );
};

export default Toast;
