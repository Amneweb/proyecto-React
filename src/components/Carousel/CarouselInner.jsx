import React from "react";
import { Link } from "react-router-dom";

const CarouselInner = ({ diapositivas }) => {
  return (
    <div className="carousel-inner">
      {diapositivas.map((diapositiva, key) => (
        <div
          key={diapositiva.diapoID}
          className={key === 0 ? `carousel-item active` : `carousel-item`}
        >
          <img
            src={diapositiva.imgRoute}
            className="d-block w-100"
            alt="de bolsillo"
          />
          <div
            className={
              diapositiva.estilo === "claro"
                ? `carousel-caption d-none d-md-block blanco`
                : `carousel-caption d-none d-md-block negro`
            }
          >
            <h5>{diapositiva.titulo} </h5>
            <p>{diapositiva.descripcion}</p>
            <Link
              to={diapositiva.enlace}
              type="button"
              className="btn btn-warning"
            >
              {diapositiva.boton}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselInner;
