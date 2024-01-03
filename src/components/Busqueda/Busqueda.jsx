import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { fetchBusqueda } from "../../helpers/fetchBusqueda";
const Busqueda = ({ queryBusqueda }) => {
  console.log("en busqueda ", queryBusqueda);
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetchBusqueda(queryBusqueda)
      .then((respuesta) => {
        setLibros(respuesta);
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
