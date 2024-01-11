import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import FinalizarCompra from "./FinalizarCompra";
import { ResetIcon } from "../iconos/ResetIcon";

const Checkout = () => {
  const { carrito, vaciarCarrito, totalApagar } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  const [idNuevaOrden, setIdNuevaOrden] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const realizarCompra = async (data) => {
    setLoading(true);
    const nuevaOrden = {
      cliente: data,
      compra: carrito,
      total: totalApagar(),
    };

    const ordenCollection = collection(db, "ordenes");
    await addDoc(ordenCollection, nuevaOrden)
      .then((resultado) => {
        setIdNuevaOrden(resultado.id);
      })
      .finally(() => setLoading(false));
  };

  function handleClickCerrar() {
    vaciarCarrito();
  }
  if (loading) {
    return <h2>Cargando datos...</h2>;
  }
  if (idNuevaOrden) {
    return (
      <FinalizarCompra
        handleClickCerrar={handleClickCerrar}
        idNuevaOrden={idNuevaOrden}
        carrito={carrito}
        total={totalApagar()}
      />
    );
  }

  return (
    <div className="container">
      <h2>checkout</h2>
      <form
        onSubmit={handleSubmit(realizarCompra)}
        className="needs-validation"
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="checkoutFormNombre"
            placeholder="Nombre y apellido"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="badge text-bg-danger">
              Debés completar este campo
            </span>
          )}
          <label htmlFor="checkoutFormNombre">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="checkoutFormEmail"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="badge text-bg-danger">El email es requerido</span>
          )}
          <label htmlFor="checkoutFormEmail">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            autoComplete="off"
            className="form-control"
            id="checkoutFormEmailVerificado"
            placeholder="name@example.com"
            {...register("emailValidation", {
              validate: (value) => value === getValues("email"),
            })}
          />
          {errors.emailValidation && (
            <span className="badge text-bg-danger">
              Las casillas de correo deben coincidir
            </span>
          )}
          <label htmlFor="checkoutFormEmailVerificado">Confirmar Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="checkoutFormTelefoono"
            placeholder="Telefono"
          />
          <label htmlFor="checkoutFormTelefono">Teléfono</label>
        </div>

        <div className="form-floating">
          <div className="row">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Comprar
              </button>
            </div>
            <div className="col-auto">
              <button
                type="reset"
                className="btn btn-primary"
                onClick={() => reset()}
              >
                <ResetIcon lado="1em" />
              </button>
            </div>
            <div className="col-auto">
              <Link
                role="button"
                to="/"
                data-bs-dismiss="modal"
                className="btn btn-outline-primary"
              >
                Cerrar y seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
