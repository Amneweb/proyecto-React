import React from "react";
import Loader from "../Loader/Loader";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import CarouselNovedades from "./CarouselNovedades";

const NovedadesEnIndex = () => {
  const libros = useFilteredCollections("libros", "novedad", "==", true);

  return (
    <div className="container">
      <h2 className="titulos">Novedades</h2>
      {libros ? <CarouselNovedades libros={libros} /> : <Loader />}
    </div>
  );
};

export default NovedadesEnIndex;
