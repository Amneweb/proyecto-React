import imagenes from '../../helpers/imagenes';
import nodisponible from '../BookCard/assets/nodisponible.jpg';
import Botones from "../Botones/Botones";

const  BookDetails = ({ item }) => {
  const rutaImagen = imagenes.find(({ id }) => id === item.isbn) ? imagenes.find(({ id }) => id === item.isbn).ruta : nodisponible;
console.log(item.stock);
console.log(item.id);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={rutaImagen} className="img-fluid rounded-start" alt={item.titulo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{item.titulo}</h2>
            <p className="card-text">Categorías: {item.genero ? item.genero.join(", "): ""} </p>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text"><small className="text-body-secondary">Cantidad en stock: {item.stock}</small></p>
            <Botones id={item.id} stock={item.stock} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
