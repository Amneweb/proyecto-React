import { Link } from "react-router-dom";
import dataCategorias from "../../data/dataCategorias.json";

const BadgeCategorias = ({categorias}) => {
  
const htmlCategorias = categorias.map ((categoria)=>
  <Link to={`/libros/${categoria}`}  key={`${categoria}`} className={`${categoria} listaCate badge rounded-pill`}>{dataCategorias.find((el) => el.id === categoria).titulo}</Link>
);
  return (
    <>{htmlCategorias}</>
  )
}

export default BadgeCategorias