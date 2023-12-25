import React from "react";
import bolsaVacia from "./emptyBag.png";
import BotonesCategorias from "../BotonesCategorias/BotonesCategorias";
import BotonesAutores from "../BotonesAutores/BotonesAutores";
import { StopSign } from "../iconos/StopSign";
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
            <h2 className="card-title">Aún no elegiste ningún libro</h2>
            <h3 className="card-text">
              <StopSign /> ¡No te vayas con las manos vacías!!{" "}
            </h3>
            <p className="card-text">
              Recorré nuestra tienda y encontrá el libro que tanto buscabas.
            </p>
            <div className="row vacia__botones column-gap-3">
              <div className="col">
                <h5>Buscá por categorías...</h5>
                <BotonesCategorias />
              </div>
              <div className="col">
                <h5>...o por autor</h5>
                <BotonesAutores />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BolsaVacia;
