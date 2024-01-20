import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import FinalizarCompra from "./FinalizarCompra";

const CheckoutUser = () => {
  const { carrito, vaciarCarrito, totalApagar } = useContext(CartContext);
  const { usuario, desloguearse } = useContext(AuthContext);

  const [idNuevaOrden, setIdNuevaOrden] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  const realizarCompra = async () => {
    setLoading(true);
    const nuevaOrden = {
      cliente: { uid: usuario.uid, email: usuario.email },
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

      <form onSubmit={() => realizarCompra()} className="needs-validation">
        <div>
          <p>Hola, </p>
          <p>Estás logueado/a con la casilla de correo {usuario.email}</p>
          <p>
            Si sos vos, por favor confirmá tu compra haciendo click en el botón
            de abajo
          </p>
          <p>
            Si no sos vos, o si sos vos pero querés loguearte con otra cuenta o
            hacer la compra en forma anónima, hacé click en Sign Out y volvé a
            loguearte
          </p>
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
                data-bs-dismiss="modal"
                className="btn btn-outline-secondary"
                onClick={() => desloguearse()}
              >
                Sign Out
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

export default CheckoutUser;
