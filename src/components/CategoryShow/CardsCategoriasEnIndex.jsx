import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../../helpers/imagenesCategoryShow";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import { useWindowSize } from "../../hooks/useWindowSize";
const CardsCategoriasEnIndex = ({ categorias }) => {
  let columnas;
  const width = useWindowSize();
  if (width < 720) {
    columnas = 2;
  } else {
    if (width >= 720 && width < 1200) {
      columnas = 4;
    } else {
      columnas = 6;
    }
  }
  return (
    <div className={`row row-cols-${columnas} g-4`}>
      {categorias.map((categoria) => (
        <div className="col" key={categoria.id}>
          <div className="card shadow-sm">
            <Link
              className="stretched-link"
              to={`/libros/${categoria.id}`}
              key={`${categoria.id}`}
              role="button"
            >
              <img
                src={
                  imagenes.find(({ id }) => id === categoria.id)
                    ? imagenes.find(({ id }) => id === categoria.id).imgRoute
                    : nodisponible
                }
                className="card-img-top"
                alt={categoria.titulo}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsCategoriasEnIndex;
