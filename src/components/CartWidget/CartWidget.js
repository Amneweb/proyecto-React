import { useContext } from "react";
import bag from "./assets/bag-heart-fill.svg";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { totalProductosEnCarrito } = useContext(CartContext);
  return (
    <div className="widget">
      <Link to="/carrito">
        <img className="cart-widget" src={bag} alt="icono carrito de compras" />

        <span className="cart-amount">{totalProductosEnCarrito()} </span>
      </Link>
    </div>
  );
};

export default CartWidget;
