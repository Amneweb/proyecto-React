import React from "react";
import categorias from "../../data/dataCategorias.json";
import { Link } from "react-router-dom";
const BotonesCategorias = () => {
  return (
    <div className="botones-bolsavacia">
      {categorias.map((categoria) => (
        <Link
          to={`/libros/${categoria.id}`}
          key={`${categoria.id}`}
          className="btn btn-primary"
          role="button"
        >
          {categoria.titulo}
        </Link>
      ))}
    </div>
  );
};

export default BotonesCategorias;
