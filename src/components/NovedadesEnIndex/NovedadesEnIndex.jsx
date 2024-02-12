import React from "react";
import Loader from "../Loader/Loader";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import CarouselNovedades from "./CarouselNovedades";

const NovedadesEnIndex = () => {
  const libros = useFilteredCollections("libros", "novedad", "==", true);

  return (
    <div className="container">
      <h2 className="titulos">Novedades</h2>
      <p>
        ¿Quién dijo que la invasión de internet iba a matar al libro impreso?
        Sea quien sea el autor del comentario, se equivocó por un amplio margen.
        En lugar de desaparecer, cada vez hay más libros impresos, cada vez hay
        más formatos y las librerías nos seguimos llenando de libros. Acá te
        dejamos un pantallazo de las novedades de este último mes, en orden
        cronológico de entrada al stock. Si querés ver todas, andá al enlace de
        más abajo, o seleccioná novedades del menú principal.
      </p>
      {libros ? <CarouselNovedades libros={libros} /> : <Loader />}
    </div>
  );
};

export default NovedadesEnIndex;
