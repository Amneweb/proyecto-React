import corazon from "./assets/chat-square-heart.svg";
const WishList = () => {
  return (
    <div>
      <img
        className="cart-widget"
        src={corazon}
        alt="icono para la wish list"
      />
      <span className="cart-amount">0</span>
    </div>
  );
};

export default WishList;
