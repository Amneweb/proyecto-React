import React from "react";
import { BagXfill } from "../../iconos/BagXfill";

const BotonVaciar = ({ handleVaciar }) => {
  return (
    <div className="d-grid">
      <button className="btn btn-outline-primary" onClick={handleVaciar}>
        Vaciar bolso de compras <BagXfill ancho="1em" alto="1em" />
      </button>
    </div>
  );
};

export default BotonVaciar;
