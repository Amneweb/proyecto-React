import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { SvgCartWidget } from "../iconos/SvgCartWidget";
const CartWidget = () => {
  const { totalProductosEnCarrito } = useContext(CartContext);
  return (
    <div className="widget">
      <Link to="/carrito">
        <SvgCartWidget ancho="1.9em" alto="1.9em" />

        <span className="cart-amount">{totalProductosEnCarrito()} </span>
      </Link>
    </div>
  );
};

export default CartWidget;
