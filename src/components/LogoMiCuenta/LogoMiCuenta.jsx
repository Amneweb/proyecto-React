import React, { useContext } from "react";
import { SvgMiCuenta } from "../iconos/SvgMiCuenta";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LogoMiCuenta = () => {
  const { usuario, isLoggedIn } = useContext(AuthContext);
  return (
    <div className="widget">
      <Link to="/micuenta">
        <SvgMiCuenta ancho="1.8em" alto="1.8em" />
      </Link>
      {isLoggedIn && (
        <span className="position-relative start-0 translate-middle badge rounded-pill user-badge">
          {usuario.displayName.slice(0, 4).toUpperCase()}
          <span className="visually-hidden">Usuario Logueado</span>
        </span>
      )}
    </div>
  );
};

export default LogoMiCuenta;
