import React, { useContext, useState } from "react";
import { HandThumbsUp } from "../iconos/HandThumbsUp";
import { ClipboardIcon } from "../iconos/ClipboardIcon";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { precioFormateado } from "../../helpers/formatearPrecios";
import { CartContext } from "../../context/CartContext";

const FinalizarCompra = ({ idNuevaOrden }) => {
  const { carrito, vaciarCarrito, totalApagar } = useContext(CartContext);
  const [mensajeCopiado, setMensajeCopiado] = useState("");
  console.log(carrito);
  function handleClickCerrar() {
    vaciarCarrito();
  }
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setMensajeCopiado("ID copiado con éxito :)");
    } catch (err) {
      setMensajeCopiado("No pudimos copiar el ID :(");
    }
  };
  return (
    <div className="container text-center">
      <h2>
        gracias por tu compra <HandThumbsUp ancho="1.2em" alto="1.2em" />
      </h2>
      <p>El ID de tu compra es</p>
      <div className="btn-group">
        <button className="btn btn-warning orderID">{idNuevaOrden}</button>
        <button
          data-tooltip-id="copiado"
          className="btn btn-primary"
          onClick={() => copyToClipBoard(idNuevaOrden)}
        >
          <ClipboardIcon lado="1em" />
        </button>

        <Tooltip id="copiado" openOnClick="true">
          <p className="lh-1 mb-0">{mensajeCopiado} </p>
        </Tooltip>
      </div>
      <p className="mt-3">Guardalo para futuras referencias</p>
      <p className="fw-bold">Detalle de tu compra</p>
      <div className="list-group">
        {carrito.map((compra) => (
          <div key={compra.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between my-0">
              <p className="fw-bold small mb-0">{compra.titulo} </p>
              <p className="small mb-0">
                Cantidad: <span className="fw-bold">{compra.contador}</span>{" "}
              </p>
            </div>
            <div className="d-flex w-100 justify-content-between my-0">
              <p className="small mb-0">Autor/a: {compra.autor.nombre} </p>
              <p className="small mb-0">ISBN: {compra.isbn} </p>
            </div>
          </div>
        ))}
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h3>Pagaste: </h3>
            <h3>{precioFormateado.format(totalApagar())} </h3>
          </div>
        </div>
      </div>
      <Link
        role="button"
        to="/"
        data-bs-dismiss="modal"
        className="btn btn-outline-secondary mt-5"
        onClick={handleClickCerrar}
      >
        Cerrar y vaciar carrito
      </Link>
    </div>
  );
};

export default FinalizarCompra;
