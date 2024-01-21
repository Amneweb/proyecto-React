import React from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import AutorEnSagas from "./AutorEnSagas";
import { Tooltip } from "react-tooltip";

const ContenedorSagas = () => {
  const saga = useParams().saga;

  const datosSaga = useFilteredCollections("sagas", "id", "==", Number(saga));
  const libros = useFilteredCollections("libros", "saga", "==", Number(saga));

  return (
    <section className="container sagas-en-index">
      {datosSaga ? (
        <div className="row">
          <h2>
            Saga{" "}
            <span className="termino-busqueda">"{datosSaga[0].nombre}"</span>
          </h2>
          <p>{datosSaga[0].descripcion} </p>
          <p>
            Autor:{" "}
            <span className="termino-busqueda">
              {datosSaga[0].autor.nombre}
            </span>
          </p>
          <p>
            Cantidad de tomos:{" "}
            <span className="termino-busqueda">{datosSaga[0].cantidad}</span>
          </p>
        </div>
      ) : (
        <p>Cargando datos ...</p>
      )}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {libros ? <ItemList libros={libros} /> : <Loader />}
      </div>
      <div className="row mt-5">
        <h2>Sobre el autor</h2>
        {datosSaga ? <AutorEnSagas id={datosSaga[0].autor.id} /> : <Loader />}
      </div>
      <Tooltip
        id="tooltip-agregar"
        anchorSelect=".card__boton"
        openOnClick="true"
        closeEvents="click"
      >
        <p className="small text-center mb-0">
          Se agregó el libro a tu bolso de compras.
        </p>
        <p className="text-center mb-0">
          <span className="cerrartooltip badge rounded-pill fw-normal">
            Click para cerrar
          </span>
        </p>
      </Tooltip>
    </section>
  );
};

export default ContenedorSagas;
