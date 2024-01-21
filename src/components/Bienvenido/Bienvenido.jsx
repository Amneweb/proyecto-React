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
      <div className="row">
        <div className="col col-sm-6">
          <h2>
            Bienvenido/a,{" "}
            <span className="fw-bold termino-busqueda">
              {usuarioRegistrado.displayName}
            </span>
          </h2>
          <p>
            Gracias por estar con nosotros. 🤗 Si es la primera vez que te
            registrás o visitás nuestra tienda online, te invitamos a recorrerla
            desde el menú superior, y esperamos encuentres los títulos que
            pueden transformar tu vida.{" "}
          </p>
          <p>
            En esta página también te dejamos unos atajos relacionados con tu
            cuenta.
          </p>
        </div>
        <div className="col col-sm-6">
          <h2>atajos</h2>
          <div
            className="btn-group-vertical w-100"
            role="group"
            aria-label="Button group"
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
            <Link
              to="/carrito"
              role="button"
              className="btn btn-outline-primary"
            >
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
      </div>
      <h2 className="mt-5">Filtrá tu búsqueda</h2>
      <div className="row vacia__botones column-gap-3">
        <div className="col">
          <h5>Por categoría</h5>
          <BotonesCategorias />
        </div>
        <div className="col">
          <h5>Por autor</h5>
          <BotonesAutores />
        </div>
      </div>
    </div>
  );
};

export default Bienvenido;
