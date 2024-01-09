import { Link } from "react-router-dom";
import imagenes from "../../helpers/imagenes";
import nodisponible from "./assets/nodisponible.jpg";
import HayStockBadge from "./HayStockBadge/HayStockBadge";
import StockBadge from "./StockBadge/StockBadge";
import BadgeCategorias from "./BadgeCategorias/BadgeCategorias";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import BotonEnCard from "./BotonEnCard/BotonEnCard";
import BadgeNovedades from "./BadgeNovedades/BadgeNovedades";
const BookCard = ({ libro }) => {
  const rutaImagen = imagenes.find(({ id }) => id === libro.isbn)
    ? imagenes.find(({ id }) => id === libro.isbn).ruta
    : nodisponible;

  const { alCarrito } = useContext(CartContext);
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card" id={libro.id}>
          <img src={rutaImagen} className="card-img-top" alt={libro.titulo} />
          <div className="card-body">
            {libro.hasOwnProperty("novedad") && <BadgeNovedades />}
            <p className="card-title fw-bolder">
              <Link to={`/libro/${libro.id}`}>{libro.titulo}</Link>
            </p>
            <p className="card-text">Autor: {libro.autor.nombre}</p>
            <div className="small categorias">
              {libro.genero && <BadgeCategorias categorias={libro.genero} />}{" "}
            </div>
            <p>Precio: ${libro.precio}</p>
            <div className="btn-group d-flex">
              <Link
                to={`/libro/${libro.id}`}
                className="btn btn-outline-primary flex-fill"
                role="button"
              >
                Ver
              </Link>

              {libro.stock === 0 ? (
                <button disabled className=" btn btn-primary">
                  Comprar
                </button>
              ) : (
                <BotonEnCard
                  handleClickAgregar={() => {
                    alCarrito(libro, 1);
                  }}
                />
              )}
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
export default BookCard;
