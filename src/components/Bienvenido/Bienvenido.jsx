import React, { useContext } from "react";
import BotonesCategorias from "../CarritoVacio/BotonesCategorias/BotonesCategorias";
import BotonesAutores from "../CarritoVacio/BotonesAutores/BotonesAutores";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SignOut } from "../iconos/SignOut";

const Bienvenido = ({ usuarioRegistrado }) => {
  const { desloguearse } = useContext(AuthContext);
  return (
    <div className="container">
      <h2>
        Bienvenido/a,{" "}
        <span className="fw-bold">{usuarioRegistrado.displayName}</span>
      </h2>

      <p>
        Si es la primera vez que te registrás o visitás nuestra tienda online,
        te invitamos a recorrerla y descubrir los títulos que pueden transformar
        tu vida. Más abajo podés buscar por categorías o autores. Si ya habías
        estado, acá te dejamos unos atajos para que encuentres más rápido la
        info que buscabas.
      </p>

      <div className="col-auto">
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
        >
          <Link to="/" role="button" className="btn btn-outline-primary">
            Ir al inicio
          </Link>
          <Link
            to="/micuenta"
            role="button"
            className="btn btn-outline-primary"
          >
            Ver mis órdenes
          </Link>
          <Link to="/carrito" role="button" className="btn btn-outline-primary">
            Ir al carrito
          </Link>
          <button
            onClick={() => desloguearse()}
            className="btn btn-outline-primary"
          >
            Desloguearme <SignOut lado="1em" />
          </button>
        </div>
      </div>
      <h2 className="mt-5">Filtros</h2>
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
