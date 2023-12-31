import React, { useEffect, useState } from "react";
import ItemListChico from "../ItemListChico/ItemListChico";
import { ArrowRight } from "../../iconos/ArrowRight";
import { fetchDatosNovedades } from "../../helpers/fetchDatosNovedades";
import { Link } from "react-router-dom";
const NovedadesEnIndex = () => {
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  const porVez = 5;
  useEffect(() => {
    fetchDatosNovedades().then((respuesta) => {
      const cantidadNovedades = respuesta.length;
      console.log("cantidad de novedades ", cantidadNovedades);
      const iteraciones = Math.ceil(cantidadNovedades / porVez);
      console.log("iteraciones ", iteraciones);
      const librosEnSlide = [];
      for (let contador = 0; contador < iteraciones; contador++) {
        librosEnSlide[contador] = respuesta.slice(
          contador * porVez,
          contador * porVez + porVez
        );
        console.log("libros en slide", librosEnSlide);
        setLibros(librosEnSlide);
      }
    });
  }, []);

  return (
    <div className="container">
      <h2>Novedades</h2>
      <div id="carouselNovedades" className="carousel slide">
        <div className="carousel-inner  py-4">
          {libros.map((libro, key) => (
            <div
              key={key}
              className={key === 0 ? `carousel-item active` : `carousel-item`}
            >
              <div className="row row-cols-5">
                <ItemListChico libros={libro} />
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
    </div>
  );
};

export default NovedadesEnIndex;
