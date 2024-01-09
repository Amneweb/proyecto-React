import React from "react";
import { Link } from "react-router-dom";
import { useCollections } from "../../../hooks/useCollections";

const BadgeCategorias = ({ categorias }) => {
  const cate = useCollections("categorias");

  const htmlCategorias =
    cate &&
    categorias.map((categoria) => (
      <Link
        to={`/libros/${categoria}`}
        key={`${categoria}`}
        className={`${categoria} listaCate badge fw-normal rounded-pill`}
      >
        {cate.find((el) => el.id === categoria).titulo}
      </Link>
    ));
  return <>{htmlCategorias && htmlCategorias}</>;
};

export default BadgeCategorias;
