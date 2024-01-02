import React from "react";
import { useState, useEffect } from "react";
import {
  fetchDataSagas,
  fetchLibrosDeSagas,
} from "../../helpers/fetchDatosSagas";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import imagenesAutores from "../../helpers/imagenesAutores";
import noDisponible from "../ContenedorAutor/assets/noDisponible.png";
const ContenedorSagas = () => {
  const saga = useParams().saga;
  console.log("saga id ", saga);
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  const [datosSaga, setDatosSaga] = useState({});
  const [datosAutor, setDatosAutor] = useState({});
  const [errorStatus, setErrorStatus] = useState(null);
  useEffect(() => {
    setLoader(true);
    Promise.all([fetchDataSagas(saga), fetchLibrosDeSagas(saga)])
      .then(([[sagaSeleccionada, autorSaga], librosDeSaga]) => {
        setLibros(librosDeSaga);
        setDatosSaga(sagaSeleccionada);
        setDatosAutor(autorSaga);
      })

      .catch((error) => {
        setErrorStatus(error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [saga]);
  const imgruta = imagenesAutores.find(({ id }) => Number(id) === datosAutor.id)
    ? imagenesAutores.find(({ id }) => Number(id) === datosAutor.id).ruta
    : noDisponible;

  return (
    <section className="container sagas-en-index">
      {loader && <Loader />}
      {errorStatus && <div>{errorStatus}</div>}
      <div className="row">
        <h2>
          Saga <span className="termino-busqueda">"{datosSaga.nombre}"</span>
        </h2>
        <p>{datosSaga.descripcion} </p>
        <p>
          Autor: <span className="termino-busqueda">{datosAutor.nombre}</span>
        </p>
        <p>
          Cantidad de tomos:{" "}
          <span className="termino-busqueda">{datosSaga.cantidad}</span>
        </p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <ItemList libros={libros} />
        </div>
        <div className="row mt-5">
          <h2>Sobre el autor</h2>
        </div>
        <div className="row align-items-center">
          <div className="contenedor__autorSagas col-3 g-4 px-4">
            <img src={imgruta} alt={`Foto de ${datosAutor.nombre}`} />
          </div>
          <div className="col-9 g-4">
            <p>{datosAutor.biografia} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContenedorSagas;
