import bag from "./assets/bag-heart-fill.svg"
const CartWidget =()=> {

    return (
        <div>
            <img className="cart-widget" src={bag} alt="icono carrito de compras" />
            <span className="cart-amount">0</span>
        </div>

    )
}

export default CartWidget