import React, { useEffect, useState } from "react";
import imagenesAutores from "../../helpers/imagenesAutores";
import noDisponible from "../ContenedorAutor/assets/noDisponible.png";
import { fetchDatosAutor } from "../../helpers/fetchDatosAutor";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { ArrowRight } from "../iconos/ArrowRight";
const AutorEnIndex = () => {
  const [datosAutor, setDatosAutor] = useState([]);
  const [loader, setLoader] = useState(true);
  const autor = 4; //este dato vendría dado desde algún backend, es algo fijo, no depende del usuario
  useEffect(() => {
    setLoader(true);

    fetchDatosAutor(autor)
      .then((respuesta) => {
        setDatosAutor(respuesta[0]);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [autor]);

  return (
    <section className="container autor-del-mes">
      {loader && <Loader />}
      <div className="row align-items-center my-5">
        <h2 className="titulos">Autor del mes</h2>
        <p>
          Como todos los meses, en esta sección te dejamos los datos de alguno
          de los autores de los libros que podés encontrar en MW.{" "}
          <span className="fw-bold">¿Por qué lo elegimos?</span> Puede ser que
          haya publicado un nuevo libro, o que se cumpla algún aniversario o
          haya algún hecho de actualidad relacionado con él, o simplemente
          porque nos vino a la memoria algún libro suyo del que hayamos
          disfrutado... y tuvimos ganas de hablar de él.
        </p>
        <p>Más abajo encontrás el enlace a todos los libros del autor.</p>
        <h3 className="termino-busqueda fw-bold">{datosAutor.nombre}</h3>
        <div className="contenedor__autorSagas col-3 g-4 px-4">
          <img
            src={
              imagenesAutores.find(({ id }) => Number(id) === datosAutor.id)
                ? imagenesAutores.find(({ id }) => Number(id) === datosAutor.id)
                    .ruta
                : noDisponible
            }
            alt={`Foto de ${datosAutor.nombre}`}
          />
        </div>
        <div className="col-9 g-4">
          <p className="justificado">{datosAutor.biografia} </p>
        </div>
      </div>
      <p>
        <Link className="enlaces" to={`/autor/${datosAutor.id}`}>
          libros del autor <ArrowRight ancho="1em" alto="1em" />
        </Link>
      </p>
    </section>
  );
};

export default AutorEnIndex;
