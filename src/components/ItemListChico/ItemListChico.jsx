import React from "react";
import BookCardChico from "../BookCardChico/BookCardChico";

const ItemListChico = ({ libros }) => {
  return (
    <>
      {libros.map((cadalibro) => (
        <BookCardChico libro={cadalibro} key={cadalibro.id} />
      ))}
    </>
  );
};

export default ItemListChico;
