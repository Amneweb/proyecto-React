import { Link } from "react-router-dom";
import imagenes from "../../helpers/imagenes";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import HayStockBadge from "../BookCard/HayStockBadge/HayStockBadge";
import StockBadge from "../BookCard/StockBadge/StockBadge";
const BookCardChico = ({ libro }) => {
  const rutaImagen = imagenes.find(({ id }) => id === libro.isbn)
    ? imagenes.find(({ id }) => id === libro.isbn).ruta
    : nodisponible;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card" id={libro.id}>
          <img src={rutaImagen} className="card-img-top" alt={libro.titulo} />
          <div className="card-body">
            <p className="card-title fw-bold">
              <Link className="cardChico" to={`/libro/${libro.id}`}>
                {libro.titulo}
              </Link>
            </p>
            <p className="card-text small">Autor: {libro.autor.nombre}</p>
            <p className="card-text small">Precio: ${libro.precio}</p>

            <div className="d-grid gap-2">
              <Link
                to={`/libro/${libro.id}`}
                className="btn btn-outline-primary"
              >
                Ver
              </Link>
            </div>
          </div>
          {libro.stock === 0 ? (
            <StockBadge />
          ) : (
            <HayStockBadge stock={libro.stock} />
          )}
        </div>
      </div>
    </div>
  );
};
export default BookCardChico;
