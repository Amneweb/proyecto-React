import React from "react";
import imagenes from "../../../helpers/imagenes";
import nodisponible from "../../../helpers/imagenes";

const CarouselSagas = ({ libros, id }) => {
  console.log("en carousel sagas ", libros);
  return (
    <div id={`carouselSaga${id}`} className="carousel slide">
      <div className="carousel-inner">
        {libros.map((libro, key) => {
          const rutaImagen = imagenes.find(({ id }) => id === libro.isbn)
            ? imagenes.find(({ id }) => id === libro.isbn).ruta
            : nodisponible;

          return (
            <div
              key={libro.id}
              className={
                key === 0
                  ? "carousel-item active rounded-start"
                  : "carousel-item rounded-start"
              }
            >
              <img
                src={rutaImagen}
                className="d-block w-100 rounded-start"
                alt={libro.titulo}
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#carouselSaga${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#carouselSaga${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSagas;
