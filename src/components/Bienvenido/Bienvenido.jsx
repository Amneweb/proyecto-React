import React from "react";
import BotonesCategorias from "../CarritoVacio/BotonesCategorias/BotonesCategorias";
import BotonesAutores from "../CarritoVacio/BotonesAutores/BotonesAutores";
import { Link } from "react-router-dom";

const Bienvenido = ({ usuarioRegistrado }) => {
  return (
    <div className="container">
      <h2>Bienvenido/a</h2>
      <p>
        Gracias,{" "}
        <span className="fw-bold">{usuarioRegistrado.displayName}</span>, por
        sumarte a nuestra comunidad.
      </p>
      <p>
        Te invitamos a seguir recorriendo nuestra tienda y descubriendo los
        títulos que pueden transformar tu vida.
      </p>
      <div className="col-auto">
        <p className="carrito__titulo">
          Podés <Link to="/">ir al inicio</Link> o buscar
        </p>
      </div>

      <div className="row vacia__botones column-gap-3">
        <div className="col">
          <h5>Por categorías...</h5>
          <BotonesCategorias />
        </div>
        <div className="col">
          <h5>...o por autor</h5>
          <BotonesAutores />
        </div>
      </div>
    </div>
  );
};

export default Bienvenido;
