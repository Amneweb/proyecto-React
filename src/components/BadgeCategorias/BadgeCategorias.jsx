import { Link } from "react-router-dom";

const BadgeCategorias = ({categorias}) => {
const htmlCategorias = categorias.map ((categoria)=>
  <Link to={`/libros/${categoria}`}  key={`${categoria}`} className={`${categoria} listaCate badge rounded-pill`}>{categoria}</Link>
);
  return (
    <>{htmlCategorias}</>
  )
}

export default BadgeCategorias