import { Link } from "react-router-dom";
import { useCollections } from "../../../hooks/useCollections";
import Loader from "../../Loader/Loader";

const BotonesCategorias = () => {
  const categorias = useCollections("categorias", "titulo");

  return (
    <div className="botones-bolsavacia">
      {categorias ? (
        categorias.map((categoria) => (
          <Link
            to={`/libros/${categoria.id}`}
            key={`${categoria.id}`}
            className="btn btn-primary"
            role="button"
          >
            {categoria.titulo}
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BotonesCategorias;
