import { Link } from "react-router-dom";
import { useCollections } from "../../../hooks/useCollections";

const BotonesCategorias = () => {
  const categorias = useCollections("categorias", "titulo");

  return (
    <div className="botones-bolsavacia">
      {categorias.map((categoria) => (
        <Link
          to={`/libros/${categoria.id}`}
          key={`${categoria.id}`}
          className="btn btn-primary"
          role="button"
        >
          {categoria.titulo}
        </Link>
      ))}
    </div>
  );
};

export default BotonesCategorias;
