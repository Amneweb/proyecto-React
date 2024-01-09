import { useCollections } from "../../hooks/useCollections";

const AsideLinks = ({ onAsideLinks }) => {
  const dataAutores = useCollections("autores", "nombre");

  function handleClickLista(e) {
    onAsideLinks(e.target.id);
  }
  return (
    <ul className="enlacesAutores">
      {dataAutores &&
        dataAutores.map((autor) => (
          <li key={autor.id}>
            <button id={autor.id} onClick={handleClickLista}>
              {" "}
              {autor.nombre}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default AsideLinks;
