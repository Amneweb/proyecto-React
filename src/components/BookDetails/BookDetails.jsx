import { useContext, useState } from "react";

import BadgeCategorias from "../BookCard/BadgeCategorias/BadgeCategorias";

import Botones from "./Botones/Botones";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const BookDetails = ({ item, ruta }) => {
  const [contador, setContador] = useState(1);

  const { alCarrito, carrito } = useContext(CartContext);
  const consultaExisteEnCarrito = carrito.find(
    (elemento) => elemento.id === item.id
  );

  function handleClickSuma() {
    contador < item.stock && setContador(contador + 1);
  }
  function handleClickResta() {
    contador > 0 && setContador(contador - 1);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 horizontal-card__img">
          <img
            src={ruta}
            className="img-fluid rounded-start"
            alt={item.titulo}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{item.titulo}</h2>
            <h4 className="card-text">Autor: {item.autor.nombre} </h4>
            <p className="card-text">
              Categorías:
              {item.genero && <BadgeCategorias categorias={item.genero} />}
            </p>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Cantidad en stock: {item.stock}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                {consultaExisteEnCarrito
                  ? `Hay ${consultaExisteEnCarrito.contador} ejemplares de este libro en tu
                bolso de compras.`
                  : `Elegí la cantidad y hacé click en el botón comprar`}
              </small>
            </p>

            <div className="container">
              <div className="row">
                <Botones
                  id={item.id}
                  contador={contador}
                  stock={item.stock}
                  handleClickAgregar={() => {
                    alCarrito(item, contador);
                  }}
                  handleClickSuma={handleClickSuma}
                  handleClickResta={handleClickResta}
                />
                {consultaExisteEnCarrito && (
                  <div className="col col-md-4 px-0">
                    <Link
                      role="button"
                      className="btn btn-outline-primary"
                      to="/carrito"
                    >
                      Ver en el carrito
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
