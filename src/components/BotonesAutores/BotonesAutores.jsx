import React from "react";
import autores from "../../data/dataAutores.json";
import { Link } from "react-router-dom";
const BotonesAutores = () => {
  return (
    <div className="botones-bolsavacia">
      {autores.map((autor) => (
        <Link
          to={`/autor/${autor.id}`}
          key={`${autor.id}`}
          className="btn btn-primary card__boton-ver"
          role="button"
        >
          {autor.nombre}
        </Link>
      ))}
    </div>
  );
};

export default BotonesAutores;
