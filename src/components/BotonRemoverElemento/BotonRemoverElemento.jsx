import React from "react";
import { Trash } from "./assets/Trash";

const BotonRemoverElemento = ({ handleRemover }) => {
  return (
    <button className="btn flex-item carrito__remover" onClick={handleRemover}>
      <Trash />
    </button>
  );
};

export default BotonRemoverElemento;
