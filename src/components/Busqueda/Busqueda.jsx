import { useState, useEffect } from "react";
import { fetchDatosLibros } from "../../helpers/fetchDatosLibros";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
const Busqueda = ({ queryBusqueda }) => {
  console.log("en busqueda ", queryBusqueda);
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetchDatosLibros()
      .then((respuesta) => {
        if (queryBusqueda) {
          setLibros(
            respuesta.filter((libro) => libro.titulo.includes(queryBusqueda))
          );
        } else {
          console.log("no se encontraron libros");
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, [queryBusqueda]);

  return (
    <div className="container">
      {loader && <Loader />}
      <h2>
        Libros encontrados para el término{" "}
        <span className="termino-busqueda">"{queryBusqueda}"</span>{" "}
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ItemList libros={libros} />
      </div>
    </div>
  );
};

export default Busqueda;
