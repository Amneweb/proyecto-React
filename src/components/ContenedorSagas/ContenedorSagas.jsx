import React from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import AutorEnSagas from "./AutorEnSagas";

const ContenedorSagas = () => {
  const saga = useParams().saga;

  const datosSaga = useFilteredCollections("sagas", "id", "==", Number(saga));
  const libros = useFilteredCollections("libros", "saga", "==", Number(saga));
  console.log("saga datos ", datosSaga);
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
        {datosSaga ? (
          <AutorEnSagas autor={datosSaga[0].autor.id} />
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default ContenedorSagas;
