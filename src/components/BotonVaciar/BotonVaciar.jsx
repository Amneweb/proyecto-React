import React from "react";
import { BagXfill } from "./assets/BagXfill";

const BotonVaciar = ({ handleVaciar }) => {
  return (
    <div className="d-grid">
      <button className="btn card__boton-ver" onClick={handleVaciar}>
        Vaciar cartera de compras <BagXfill />
      </button>
    </div>
  );
};

export default BotonVaciar;
