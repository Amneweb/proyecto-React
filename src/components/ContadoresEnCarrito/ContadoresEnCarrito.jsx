import React from "react";

const ContadoresEnCarrito = ({ estadoContador }) => {
  return (
    <div className="item-flex carrito__contador btn-group">
      <button
        type="button"
        className="btn btn-outline-secondary card__boton-ver"
      >
        -
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary card__boton-ver"
      >
        {estadoContador}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary card__boton-ver"
      >
        +
      </button>
    </div>
  );
};

export default ContadoresEnCarrito;
