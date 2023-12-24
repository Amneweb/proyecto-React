import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import imagenes from "../../helpers/imagenes";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import BotonVaciar from "../BotonVaciar/BotonVaciar";
import BotonRemoverElemento from "../BotonRemoverElemento/BotonRemoverElemento";
import ContadoresEnCarrito from "../ContadoresEnCarrito/ContadoresEnCarrito";
import BolsaVacia from "../BolsaVacia/BolsaVacia";
import { precioFormateado } from "../../helpers/formatearPrecios";
const Carrito = () => {
  const { carrito, vaciarCarrito, removerElemento, totalApagar } =
    useContext(CartContext);
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
                    <h5>{compra.titulo}</h5>
                    <p>{compra.autor.nombre} </p>
                    <p className="small">ISBN: {compra.isbn} </p>
                    <p className="small">
                      Precio unitario: {precioFormateado.format(compra.precio)}
                    </p>
                  </div>
                  <ContadoresEnCarrito estadoContador={compra.contador} />
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
