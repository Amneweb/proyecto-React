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
  console.log("categorias en cardscate", categorias);
  return (
    <div className="container my-5">
      {loader && <Loader />}
      <h2 className="fw-bold my-5">¿qué tipo de contenido te gusta leer?</h2>
      <CardsCategoriasEnIndex categorias={categorias} />
    </div>
  );
};

export default CategoryShow;
