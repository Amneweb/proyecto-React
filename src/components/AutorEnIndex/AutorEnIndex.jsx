import React from "react";
import imagenesAutores from "../../helpers/imagenesAutores";
import noDisponible from "../ContenedorAutor/assets/noDisponible.png";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { ArrowRight } from "../iconos/ArrowRight";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
const AutorEnIndex = () => {
  const autor = 4; //este dato vendría dado desde algún backend, es algo fijo, no depende del usuario
  const datosAutor = useFilteredCollections("autores", "id", "==", autor);

  return (
    <section className="container autor-del-mes">
      <h2 className="titulos">Autor del mes</h2>
      <p>
        Como todos los meses, en esta sección te dejamos los datos de alguno de
        los autores de los libros que podés encontrar en MW.{" "}
        <span className="fw-bold">¿Por qué lo elegimos?</span> Puede ser que
        haya publicado un nuevo libro, o que se cumpla algún aniversario o haya
        algún hecho de actualidad relacionado con él, o simplemente porque nos
        vino a la memoria algún libro suyo del que hayamos disfrutado... y
        tuvimos ganas de hablar de él.
      </p>
      <p>Más abajo encontrás el enlace a todos los libros del autor.</p>
      {datosAutor ? (
        <>
          {" "}
          <h3 className="termino-busqueda fw-bold mt-3">
            {datosAutor[0].nombre}
          </h3>
          <div className="row">
            <div className="contenedor__autorSagas col-3 g-4 px-4">
              <img
                src={
                  imagenesAutores.find(
                    ({ id }) => Number(id) === datosAutor[0].id
                  )
                    ? imagenesAutores.find(
                        ({ id }) => Number(id) === datosAutor[0].id
                      ).ruta
                    : noDisponible
                }
                alt={`Foto de ${datosAutor[0].nombre}`}
              />
            </div>
            <div className="col-9 g-4">
              <p className="justificado">{datosAutor[0].biografia} </p>
            </div>
            <p>
              <Link className="enlaces" to={`/autor/${datosAutor[0].id}`}>
                libros del autor <ArrowRight ancho="1em" alto="1em" />
              </Link>
            </p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default AutorEnIndex;
