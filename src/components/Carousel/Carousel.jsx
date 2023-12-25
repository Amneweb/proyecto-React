import React from "react";
import slide1 from "./bolsillo.jpg";
import slide2 from "./infantil.jpg";
import slide3 from "./neville.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="container-fluid p-0">
      <div id="carouselHome" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="de bolsillo" />
            <div className="carousel-caption d-none d-md-block blanco">
              <h5>¿Te gusta leer en cualquier lado?</h5>
              <p>
                Si sos de las personas que no pueden salir a la calle sin un
                libro, las ediciones de bolsillo son para vos. Recorré los
                títulos que tenemos en este formato.
              </p>
              <Link
                to="/libros/po"
                type="button"
                className="btn btn-primary carousel-cta"
              >
                Ediciones de bolsillo
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="infantiles" />
            <div className="carousel-caption d-none d-md-block blanco">
              <h5>Expandí los horizontes...</h5>
              <p>
                ... de los peques que te rodean. Regalales páginas de mundos
                fantásticos, aprendizajes y personajes inolvidables.
              </p>
              <Link
                to="/libros/in"
                type="button"
                className="btn btn-primary carousel-cta"
              >
                Novelas y cuentos infantiles
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="la casa neville" />
            <div className="carousel-caption d-none d-md-block negro">
              <h5>Viajá al siglo XIX...</h5>
              <p>
                ...y sumergite junto a Miss Manon en la nueva saga de Florencia
                Bonelli, poblada de intrigas, luchas de poder y romanticismo.
              </p>
              <Link
                to="/libro/21"
                type="button"
                className="btn btn-primary carousel-cta"
              >
                La casa Neville
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
