import { Link } from "react-router-dom";
import { useCollections } from "../../../hooks/useCollections";

const BotonesAutores = () => {
  const autores = useCollections("autores", "nombre");
  return (
    <div className="botones-bolsavacia">
      {autores.map((autor) => (
        <Link
          to={`/autor/${autor.id}`}
          key={`${autor.id}`}
          className="btn btn-primary card__boton-ver"
          role="button"
        >
          {autor.nombre}
        </Link>
      ))}
    </div>
  );
};

export default BotonesAutores;
