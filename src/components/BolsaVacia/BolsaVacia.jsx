import React from "react";
import bolsaVacia from "./emptyBag.png";
import BotonesCategorias from "../BotonesCategorias/BotonesCategorias";
import BotonesAutores from "../BotonesAutores/BotonesAutores";
const BolsaVacia = () => {
  return (
    <div className="card mb-3 border">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={bolsaVacia}
            className="img-fluid rounded-start"
            alt="imagen de bolsa vacía"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h2 className="card-title">Tu bolso está vacío</h2>
            <p className="card-text">
              Recorré nuestra tienda y encontrá el libro que tanto buscabas.
            </p>
            <h5>Buscá por categorías...</h5>
            <BotonesCategorias />
            <h5>...o por autor</h5>
            <BotonesAutores />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BolsaVacia;
