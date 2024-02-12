import { useEffect, useState } from "react";
import AsideAutor from "./AsideAutor";
import ItemList from "../ItemList/ItemList";
import { fetchDatosLibros } from "../../helpers/fetchDatosLibros";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { fetchDatosAutor } from "../../helpers/fetchDatosAutor";
import { Tooltip } from "react-tooltip";

const ContenedorAutor = () => {
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  const [datosAutor, setDatosAutor] = useState([]);

  const autor = useParams().autor;

  useEffect(() => {
    setLoader(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetchDatosLibros()
      .then((respuesta) => {
        if (autor) {
          setLibros(
            respuesta.filter((libro) => libro.autor.id === Number(autor))
          );

          fetchDatosAutor(autor).then((respuesta) => {
            setDatosAutor(
              respuesta.find((cadaautor) => cadaautor.id === Number(autor))
            );
          });
        } else {
          function ordenarPorAutor(a, b) {
            if (a.autor.nombre < b.autor.nombre) {
              return -1;
            }
            if (a.autor.nombre > b.autor.nombre) {
              return 1;
            }
            return 0;
          }

          respuesta.sort(ordenarPorAutor);
          setLibros(respuesta);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, [autor]);

  return (
    <div className="container">
      {loader && <Loader />}
      <div className="row">
        <h2>
          Libros de{" "}
          <span className="termino-busqueda">{datosAutor.nombre}</span>{" "}
        </h2>
        <div className="aside col-md-4 border rounded pe-4">
          <AsideAutor datosAutor={datosAutor} />
        </div>

        <div className="main-listado col-md-8">
          <div className="row row-cols-2 row-cols-lg-3 g-4">
            <ItemList libros={libros} />
          </div>
        </div>
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
    </div>
  );
};

export default ContenedorAutor;
