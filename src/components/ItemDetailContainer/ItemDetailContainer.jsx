import { useState, useEffect } from "react";
import { fetchDetallePorID } from "../../helpers/fetchDatosLibros";
import BookDetails from "../BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import imagenes from "../../helpers/imagenes";
import Loader from "../Loader/Loader";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
const ItemDetailContainer = () => {
  const id = useParams().id;
  const libro = useFilteredCollections("libros", "id", "==", Number(id));
  console.log("en detalle libro ", libro);
  return (
    <div className="container">
      <h2>Detalle del libro buscado</h2>
      {libro ? (
        <BookDetails
          item={libro[0]}
          ruta={
            imagenes.find(({ id }) => id === libro[0].isbn)
              ? imagenes.find(({ id }) => id === libro[0].isbn).ruta
              : nodisponible
          }
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemDetailContainer;
