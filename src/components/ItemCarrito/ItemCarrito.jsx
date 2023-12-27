import imagenes from "../../helpers/imagenes";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import nodisponible from "../BookCard/assets/nodisponible.jpg";
import BotonRemoverElemento from "./BotonRemoverElemento/BotonRemoverElemento";
import ContadoresEnCarrito from "./ContadoresEnCarrito/ContadoresEnCarrito";
import { precioFormateado } from "../../helpers/formatearPrecios";
import { Link } from "react-router-dom";

const ItemCarrito = ({ compra }) => {
  const rutaImagen = (isbn) => {
    if (imagenes.find(({ id }) => id === isbn)) {
      return imagenes.find(({ id }) => id === isbn).ruta;
    } else {
      return nodisponible;
    }
  };

  const { removerElemento, modificarCantidad } = useContext(CartContext);

  const handleRemover = (item) => {
    removerElemento(item);
  };

  const handleSumarAgregar = (item) => {
    if (item.contador + 1 <= item.stock) {
      modificarCantidad(item, item.contador + 1);
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
    <li className="list-group-item renglon-compra" key={compra.id}>
      <div className="carrito__imagen flex-item">
        <img src={rutaImagen(compra.isbn)} alt={`imagen de ${compra.titulo}`} />
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
      />
      <p className="flex-item carrito__totalrenglon">
        <span className="fw-bolder small">Total del renglón</span>
        <br />
        {precioFormateado.format(compra.precio * compra.contador)}
      </p>
      <BotonRemoverElemento handleRemover={() => handleRemover(compra)} />
    </li>
  );
};

export default ItemCarrito;
