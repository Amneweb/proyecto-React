import { useState, useEffect } from "react";
import { fetchNovedades } from "../../helpers/fetchDatosLibros";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
const Novedades = () => {
  const [loader, setLoader] = useState(true);
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetchNovedades()
      .then((respuesta) => {
        setLibros(respuesta);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="container">
      {loader && <Loader />}
      <h2>novedades</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <ItemList libros={libros} />
      </div>
    </div>
  );
};

export default Novedades;
