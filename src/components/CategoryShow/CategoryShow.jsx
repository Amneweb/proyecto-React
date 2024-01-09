import CardsCategoriasEnIndex from "./CardsCategoriasEnIndex";

import { useCollections } from "../../hooks/useCollections";
const CategoryShow = () => {
  const categorias = useCollections("categorias", "titulo");
  return (
    <div className="container my-5">
      <h2 className="titulos">¿qué tipo de contenido te gusta leer?</h2>
      <CardsCategoriasEnIndex categorias={categorias} />
    </div>
  );
};

export default CategoryShow;
