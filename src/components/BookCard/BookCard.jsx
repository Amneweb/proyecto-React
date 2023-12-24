import { Link } from "react-router-dom";
import imagenes from "../../helpers/imagenes";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import HayStockBadge from "../HayStockBadge/HayStockBadge";
import StockBadge from "../StockBadge/StockBadge";
import BadgeCategorias from "../BadgeCategorias/BadgeCategorias";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import BotonEnCard from "../BotonEnCard/BotonEnCard";
const LibroCard = ({ libro }) => {
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
            <h5 className="card-title">{libro.titulo}</h5>
            <p className="card-text">Autor: {libro.autor.nombre}</p>
            <div className="small categorias">
              Categorías:{" "}
              {libro.genero && <BadgeCategorias categorias={libro.genero} />}{" "}
            </div>
            <p>Precio: ${libro.precio}</p>
            <div className="row card__botones">
              <Link
                to={`/libro/${libro.id}`}
                className="btn btn-primary card__boton card__boton-ver"
              >
                Ver
              </Link>
              {libro.stock === 0 ? (
                <button className="btn btn-primary card__boton comprar-disabled">
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
export default LibroCard;
