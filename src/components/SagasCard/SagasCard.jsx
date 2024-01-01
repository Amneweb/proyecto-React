import React from "react";
import { Link } from "react-router-dom";
import CarouselSagas from "../SagasEnIndex/CarouselSagas/CarouselSagas";
import { ArrowRight } from "../iconos/ArrowRight";

const SagasCard = ({ saga, libros }) => {
  console.log("saga en card ", saga);
  console.log("libros en card ", libros);
  return (
    <div className="col">
      <div className="card mb-3 shadow-sm" id={saga.id}>
        <div className="row g-0">
          <div className="col-md-5 horizontal-card__img">
            <CarouselSagas libros={libros} id={saga.id} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <p className="card-title fw-bolder">
                <Link to={`/saga/${saga.id}`}>{saga.nombre}</Link>
              </p>
              <p className="card-text">Autor: {saga.autor.nombre}</p>
              <p className="card-text small">
                Cantidad de tomos: {saga.cantidad}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {saga.descripcion.slice(0, 150)}...
                </small>
              </p>
              <div className="d-grid gap-2 d-md-block text-end">
                <Link
                  to={`/saga/${saga.id}`}
                  className="btn btn-outline-primary"
                >
                  Ver <ArrowRight ancho="1.2em" alto="1.2em" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagasCard;
