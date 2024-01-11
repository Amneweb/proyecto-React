import { Link } from "react-router-dom";
import { useCollections } from "../../../hooks/useCollections";
import Loader from "../../Loader/Loader";

const BotonesAutores = () => {
  const autores = useCollections("autores", "nombre");
  return (
    <div className="botones-bolsavacia">
      {autores ? (
        autores.map((autor) => (
          <Link
            to={`/autor/${autor.id}`}
            key={`${autor.id}`}
            className="btn btn-primary card__boton-ver"
            role="button"
          >
            {autor.nombre}
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BotonesAutores;
