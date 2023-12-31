import React from "react";
import { Link } from "react-router-dom";
import CarouselSagas from "../SagasEnIndex/CarouselSagas/CarouselSagas";

const SagasCard = ({ saga, libros }) => {
  console.log("saga en card ", saga);
  console.log("libros en card ", libros);
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card" id={saga.id}>
          <CarouselSagas libros={libros} />

          <div className="card-body">
            <p className="card-title fw-bolder">
              <Link to={`/saga/${saga.id}`}>{saga.nombre}</Link>
            </p>
            <p className="card-text">Autor: {saga.autor.nombre}</p>
            <div className="row card__botones">
              <Link
                to={`/saga/${saga.id}`}
                className="btn btn-primary card__boton card__boton-ver"
              >
                Ver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagasCard;
