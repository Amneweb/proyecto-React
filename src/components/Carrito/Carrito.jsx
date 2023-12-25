import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import imagenes from "../../helpers/imagenes";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import BotonVaciar from "../BotonVaciar/BotonVaciar";
import BotonRemoverElemento from "../BotonRemoverElemento/BotonRemoverElemento";
import ContadoresEnCarrito from "../ContadoresEnCarrito/ContadoresEnCarrito";
import BolsaVacia from "../BolsaVacia/BolsaVacia";
import { precioFormateado } from "../../helpers/formatearPrecios";
import { Link } from "react-router-dom";

const Carrito = () => {
  const [tool, setTool] = useState(false);
  console.log("tool a ppio de carrito ", tool);
  const {
    carrito,
    vaciarCarrito,
    removerElemento,
    totalApagar,
    modificarCantidad,
  } = useContext(CartContext);
  const rutaImagen = (isbn) => {
    if (imagenes.find(({ id }) => id === isbn)) {
      return imagenes.find(({ id }) => id === isbn).ruta;
    } else {
      return nodisponible;
    }
  };
  const handleVaciar = () => {
    vaciarCarrito();
  };
  const handleRemover = (item) => {
    removerElemento(item);
  };

  const handleSumarAgregar = (item) => {
    if (item.contador + 1 <= item.stock) {
      modificarCantidad(item, item.contador + 1);
    } else {
      console.log("no hay más stock");
      console.log("tool en handle sumar agregar ", tool);
    }
  };
  const handleRestarRemover = (item) => {
    if (item.contador - 1 > 0) {
      modificarCantidad(item, item.contador - 1);
    } else {
      removerElemento(item);
    }
  };
  return (
    <div className="container">
      <h1>Bolso de compras</h1>
      {carrito.length === 0 ? (
        <BolsaVacia />
      ) : (
        <div className="row">
          <div className="col-8">
            <ul className="list-group">
              {carrito.map((compra) => (
                <li className="list-group-item renglon-compra" key={compra.id}>
                  <div className="carrito__imagen flex-item">
                    <img
                      src={rutaImagen(compra.isbn)}
                      alt={`imagen de ${compra.titulo}`}
                    />
                  </div>
                  <div className="flex-item carrito__titulo">
                    <p className="mb-1 fw-bold">
                      <Link to={`/libro/${compra.id}`}>{compra.titulo}</Link>
                    </p>
                    <p>{compra.autor.nombre} </p>
                    <p className="small">ISBN: {compra.isbn} </p>
                    <p className="small">
                      Precio unitario: {precioFormateado.format(compra.precio)}
                    </p>
                  </div>
                  <ContadoresEnCarrito
                    estadoContador={compra.contador}
                    handleSumarAgregar={handleSumarAgregar}
                    handleRestarRemover={handleRestarRemover}
                    item={compra}
                    tool={tool}
                    setTool={setTool}
                  />
                  <p className="flex-item carrito__totalrenglon">
                    <span className="fw-bolder small">Total del renglón</span>
                    <br />
                    {precioFormateado.format(compra.precio * compra.contador)}
                  </p>
                  <BotonRemoverElemento
                    handleRemover={() => handleRemover(compra)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                <h3>Total: {precioFormateado.format(totalApagar())}</h3>
              </li>
              <li className="list-group-item">
                <div className="d-grid">
                  <button className="btn">Pagar</button>
                </div>
              </li>
              <li className="list-group-item">
                <BotonVaciar handleVaciar={handleVaciar} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
