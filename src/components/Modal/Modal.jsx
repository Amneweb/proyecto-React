import React from "react";
import Checkout from "../Checkout/Checkout";
import CheckoutUser from "../Checkout/CheckoutUser";

const Modal = ({ formulario }) => {
  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              AW LIBROS
            </h1>
          </div>
          <div className="modal-body">
            {formulario === "checkout" && <Checkout />}
            {formulario === "checkoutuser" && <CheckoutUser />}
          </div>
          <div className="modal-footer">
            <p className="small text-right">&copy; Amneris Calle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
