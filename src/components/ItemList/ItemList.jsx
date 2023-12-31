import LibroCard from "../BookCard/BookCard";
const ItemList = ({ libros }) => {
  return (
    <>
      {libros.map((cadalibro) => (
        <LibroCard libro={cadalibro} key={cadalibro.id} />
      ))}
    </>
  );
};
export default ItemList;
