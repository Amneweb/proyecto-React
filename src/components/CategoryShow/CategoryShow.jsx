import { useEffect, useState } from "react";
import CardsCategoriasEnIndex from "./CardsCategoriasEnIndex";
import { fetchDatosCategorias } from "../../helpers/fetchDatosCategorias";
import Loader from "../Loader/Loader";
const CategoryShow = () => {
  const [categorias, setCategorias] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchDatosCategorias()
      .then((respuesta) => setCategorias(respuesta))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="container my-5">
      {loader && <Loader />}
      <h2 className="titulos">¿qué tipo de contenido te gusta leer?</h2>
      <CardsCategoriasEnIndex categorias={categorias} />
    </div>
  );
};

export default CategoryShow;
