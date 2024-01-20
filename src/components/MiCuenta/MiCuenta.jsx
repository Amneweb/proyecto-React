import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../helpers/firebase";

const MiCuenta = () => {
  const { usuario, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        isLoggedIn = false;
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h5>Hola, {usuario.displayName} </h5>
          <p>Acá te mostramos tu historial de compras</p>
          <p>¿Querés desloguearte? Hacé click acá: </p>
          <p>
            <button className="btn btn-outline-primary" onClick={handleLogOut}>
              Desloguearme
            </button>
          </p>
        </div>
      ) : (
        <>
          <div>
            <h5>ATENCION</h5>
            <p>
              Aun no estás logueado, por favor logueate utilizando el link de
              más abajo
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
