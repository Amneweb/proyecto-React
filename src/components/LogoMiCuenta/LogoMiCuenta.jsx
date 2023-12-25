import React from "react";
import { SvgMiCuenta } from "../iconos/SvgMiCuenta";
import { Link } from "react-router-dom";
const LogoMiCuenta = () => {
  return (
    <div className="widget">
      <Link to="/micuenta">
        <SvgMiCuenta ancho="1.8em" alto="1.8em" />
      </Link>
    </div>
  );
};

export default LogoMiCuenta;
