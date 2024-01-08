import React, { useEffect, useState } from "react";
import { fetchDatosCategorias } from "../../../helpers/fetchDatosCategorias";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
const BotonesCategorias = () => {
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
    <div className="botones-bolsavacia">
      {loader && <Loader />}
      {categorias.map((categoria) => (
        <Link
          to={`/libros/${categoria.id}`}
          key={`${categoria.id}`}
          className="btn btn-primary"
          role="button"
        >
          {categoria.titulo}
        </Link>
      ))}
    </div>
  );
};

export default BotonesCategorias;
