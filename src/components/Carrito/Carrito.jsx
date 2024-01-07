import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import BotonVaciar from "./BotonVaciar/BotonVaciar";
import CarritoVacio from "../CarritoVacio/CarritoVacio";
import { precioFormateado } from "../../helpers/formatearPrecios";
import ItemCarrito from "../ItemCarrito/ItemCarrito";
import ModalCheckout from "../ModalCheckout/ModalCheckout";

const Carrito = () => {
  const { carrito, vaciarCarrito, totalApagar } = useContext(CartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>Bolso de compras</h1>
      {carrito.length === 0 ? (
        <CarritoVacio />
      ) : (
        <div className="row">
          <ModalCheckout />
          <div className="col-8">
            <ul className="list-group">
              {carrito.map((compra) => (
                <ItemCarrito key={compra.id} compra={compra} />
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
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Finalizar compra
                  </button>
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
