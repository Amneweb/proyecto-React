import { useState, useEffect } from "react";
import { fetchDetallePorID } from "../../helpers/fetchDatosLibros";
import BookDetails from "../BookDetails/BookDetails";
import { useParams } from "react-router-dom";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import imagenes from "../../helpers/imagenes";
import Loader from "../Loader/Loader";
const ItemDetailContainer = () => {
  const [libro, setLibro] = useState(null);
  const [loader, setLoader] = useState(true);
  const id = useParams().id;
  useEffect(() => {
    fetchDetallePorID(id)
      .then((respuesta) => {
        setLibro(respuesta[0]);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [id]);
  return (
    <div className="container">
      {loader && <Loader />}
      <h2>Detalle del libro buscado</h2>
      {libro && (
        <BookDetails
          item={libro}
          ruta={
            imagenes.find(({ id }) => id === libro.isbn)
              ? imagenes.find(({ id }) => id === libro.isbn).ruta
              : nodisponible
          }
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
