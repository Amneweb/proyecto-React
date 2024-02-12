import React from "react";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import noDisponible from "../ContenedorAutor/assets/noDisponible.png";
import imagenesAutores from "../../helpers/imagenesAutores";
const AutorEnSagas = ({ id }) => {
  const datosAutor = useFilteredCollections("autores", "id", "==", id);
  return (
    <div className="row align-items-center">
      {datosAutor ? (
        <>
          <div className="contenedor__autorSagas col-md-3 g-4 px-4">
            <img
              src={
                imagenesAutores.find(
                  ({ id }) => Number(id) === datosAutor[0].id
                )
                  ? imagenesAutores.find(
                      ({ id }) => Number(id) === datosAutor[0].id
                    ).ruta
                  : noDisponible
              }
              alt={`Foto de ${datosAutor[0].nombre}`}
            />
          </div>
          <div className="col-md-9 g-4">
            <p>{datosAutor[0].biografia} </p>
          </div>
        </>
      ) : (
        <p>Cargando datos ...</p>
      )}
    </div>
  );
};

export default AutorEnSagas;
