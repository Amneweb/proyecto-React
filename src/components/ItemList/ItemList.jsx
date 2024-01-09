import BookCard from "../BookCard/BookCard";
const ItemList = ({ libros }) => {
  return (
    <>
      {libros.map((cadalibro) => (
        <BookCard libro={cadalibro} key={cadalibro.id} />
      ))}
    </>
  );
};
export default ItemList;
