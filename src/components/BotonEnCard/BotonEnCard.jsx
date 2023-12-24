import React from "react";

const BotonEnCard = ({ handleClickAgregar }) => {
  return (
    <button
      className="btn btn-primary card__boton"
      onClick={() => handleClickAgregar(1)}
    >
      Comprar
    </button>
  );
};

export default BotonEnCard;
