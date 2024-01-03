import { useState, useEffect } from "react";
import {
  fetchDatosLibros,
  fetchLibrosPorCategoria,
  fetchLibrosPorIdioma,
  fetchLibrosPorVariante,
  fetchTituloCatePorID,
} from "../../helpers/fetchDatosLibros";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
const ItemListContainer = () => {
  const [loader, setLoader] = useState(true);
  const [tituloCate, setTituloCate] = useState([]);
  const [libros, setLibros] = useState([]);
  const categoria = useParams().categoria;
  const idioma = useParams().idioma;
  const variante = useParams().variante;

  useEffect(() => {
    setLoader(true);
    let termino = "";
    if (categoria) {
      termino = categoria;
    } else {
      if (idioma) {
        termino = idioma;
      } else {
        if (variante) {
          termino = variante;
        }
      }
    }
    switch (termino) {
      case categoria:
        Promise.all([
          fetchLibrosPorCategoria(termino),
          fetchTituloCatePorID(termino),
        ])
          .then(([librosPorCate, datosCategoria]) => {
            setLibros(librosPorCate);
            setTituloCate([
              "Libros para la categoría ",
              datosCategoria[0].titulo,
            ]);
          })
          .finally(() => {
            setLoader(false);
          });
        break;
      case idioma:
        fetchLibrosPorIdioma(termino)
          .then((respuesta) => {
            setLibros(respuesta);
            const nombreIdioma = termino === "ES" ? "Español" : "Inglés";
            setTituloCate(["Libros en ", nombreIdioma]);
          })
          .finally(() => {
            setLoader(false);
          });

        break;
      case variante:
        fetchLibrosPorVariante(termino)
          .then((respuesta) => {
            setLibros(respuesta);
            setTituloCate(["Libros edición de bolsillo"]);
          })
          .finally(() => {
            setLoader(false);
          });
        break;
      default:
        fetchDatosLibros()
          .then((respuesta) => {
            setLibros(respuesta);
            setTituloCate(["Todos los libros"]);
          })
          .finally(() => {
            setLoader(false);
          });
    }
  }, [categoria, idioma, variante]);

  return (
    <div className="container">
      {loader && <Loader />}
      {tituloCate && (
        <h2>
          {tituloCate[0]}
          <span className="termino-busqueda">{tituloCate[1]}</span>
        </h2>
      )}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ItemList libros={libros} />
      </div>
    </div>
  );
};

export default ItemListContainer;
