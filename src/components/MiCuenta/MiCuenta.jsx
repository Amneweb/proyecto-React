import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SignOut } from "../iconos/SignOut";
import { Link, useNavigate } from "react-router-dom";
import ListadoOrdenesUsuario from "../ListadoOrdenesUsuario/ListadoOrdenesUsuario";

const MiCuenta = () => {
  const { usuario, isLoggedIn, desloguearse } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    desloguearse();
    navigate("/");
  };
  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h2>Hola, {usuario.displayName} </h2>
          <p>Acá iremos mostrando el listado de tus compras...</p>
          <ListadoOrdenesUsuario />

          <p className="mt-2">
            <button className="btn btn-outline-primary" onClick={handleLogOut}>
              Desloguearme <SignOut lado="1em" />
            </button>
          </p>
        </div>
      ) : (
        <>
          <div>
            <h5>ATENCION</h5>
            <p>
              Aun no estás logueado, por favor logueate utilizando el link que
              sigue
            </p>

            <p>
              <Link
                role="button"
                to="/loguearse"
                className="btn btn-outline-primary"
              >
                QUIERO LOGUEARME
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MiCuenta;
