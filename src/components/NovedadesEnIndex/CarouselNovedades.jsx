import React from "react";
import ItemListChico from "../ItemListChico/ItemListChico";
import { ArrowRight } from "../iconos/ArrowRight";
import { Link } from "react-router-dom";
const CarouselNovedades = ({ libros }) => {
  const porVez = 5;
  const maxIteraciones = 2;

  const cantidadNovedades = libros.length;

  const iteraciones =
    Math.ceil(cantidadNovedades / porVez) > maxIteraciones
      ? maxIteraciones
      : Math.ceil(cantidadNovedades / porVez);

  const librosPorVez = [];
  for (let contador = 0; contador < iteraciones; contador++) {
    librosPorVez[contador] = libros.slice(
      contador * porVez,
      contador * porVez + porVez
    );
  }

  return (
    <>
      <div id="carouselNovedades" className="carousel slide">
        <div className="carousel-inner  py-4">
          {librosPorVez &&
            librosPorVez.map((libros, key) => (
              <div
                key={`pantalla${key}`}
                className={key === 0 ? `carousel-item active` : `carousel-item`}
              >
                <div className="row row-cols-5">
                  <ItemListChico libros={libros} />
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev control-prev-homepage"
          type="button"
          data-bs-target="#carouselNovedades"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next control-next-homepage"
          type="button"
          data-bs-target="#carouselNovedades"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p>
        <Link className="enlaces" to="/novedades">
          todas las novedades <ArrowRight ancho="1em" alto="1em" />
        </Link>
      </p>
    </>
  );
};

export default CarouselNovedades;
