import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { HandThumbsUp } from "../iconos/HandThumbsUp";
import { ClipboardIcon } from "../iconos/ClipboardIcon";
import { Tooltip } from "react-tooltip";

const Checkout = () => {
  const { carrito, vaciarCarrito, totalApagar } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const [idNuevaOrden, setIdNuevaOrden] = useState("");
  const [mensajeCopiado, setMensajeCopiado] = useState("");
  const db = getFirestore();

  const realizarCompra = (data) => {
    const nuevaOrden = {
      cliente: data,
      compra: carrito,
      total: totalApagar(),
    };

    const ordenCollection = collection(db, "ordenes");
    addDoc(ordenCollection, nuevaOrden).then((resultado) => {
      setIdNuevaOrden(resultado.id);
      vaciarCarrito();
    });
  };

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setMensajeCopiado("ID copiado con éxito :)");
    } catch (err) {
      setMensajeCopiado("No pudimos copiar el ID :(");
    }
  };

  if (idNuevaOrden) {
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
      </div>
    );
  }

  return (
    <div className="container">
      <h2 className="titulos">checkout</h2>
      <form onSubmit={handleSubmit(realizarCompra)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="checkoutFormNombre"
            placeholder="Nombre"
            {...register("nombre")}
          />
          <label htmlFor="checkoutFormNombre">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="checkoutFormApellido"
            placeholder="Apellido"
            {...register("apellido")}
          />
          <label htmlFor="checkoutFormApellido">Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="checkoutFormEmail"
            placeholder="name@example.com"
            {...register("email")}
          />
          <label htmlFor="checkoutFormEmail">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="checkoutFormPassword"
            placeholder="Password"
          />
          <label htmlFor="checkoutFormPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
