import { useContext, useState } from "react";
import imagenes from "../../helpers/imagenes";
import BadgeCategorias from "../BookCard/BadgeCategorias/BadgeCategorias";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import Botones from "./Botones/Botones";
import { CartContext } from "../../context/CartContext";

const BookDetails = ({ item }) => {
  const rutaImagen =
    imagenes.find(({ id }) => id === item.isbn).ruta || nodisponible;

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
            src={rutaImagen}
            className="img-fluid rounded-start"
            alt={item.titulo}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{item.titulo}</h2>
            <h4 className="card-text">Autor: {item.autor.nombre}</h4>
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
                {consultaExisteEnCarrito &&
                  `Hay ${consultaExisteEnCarrito.contador} ejemplares de este libro en tu
                bolso de compras.`}
              </small>
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
