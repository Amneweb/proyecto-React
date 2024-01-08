import React, { useEffect, useState } from "react";
import { fetchDatosAutorTodos } from "../../../helpers/fetchDatosAutor";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
const BotonesAutores = () => {
  const [autores, setAutores] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetchDatosAutorTodos()
      .then((respuesta) => setAutores(respuesta))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="botones-bolsavacia">
      {loader && <Loader />}
      {autores.map((autor) => (
        <Link
          to={`/autor/${autor.id}`}
          key={`${autor.id}`}
          className="btn btn-primary card__boton-ver"
          role="button"
        >
          {autor.nombre}
        </Link>
      ))}
    </div>
  );
};

export default BotonesAutores;
