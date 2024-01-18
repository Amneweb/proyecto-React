import React from "react";
import { SvgMiCuenta } from "../iconos/SvgMiCuenta";
import { Link } from "react-router-dom";
const LogoMiCuenta = () => {
  return (
    <div className="widget navbar">
      <ul className="navbar-nav">
        <li className="nav-item dropdownmenu">
          <button
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <SvgMiCuenta ancho="1.8em" alto="1.8em" />
          </button>
          <ul className="dropdown-menu micuenta">
            <li className="dropdown-item">
              <Link to="">Logueate</Link>
            </li>
            <li className="dropdown-item">
              <Link to="">Registrate</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LogoMiCuenta;
