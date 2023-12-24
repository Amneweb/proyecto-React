import corazon from "./assets/chat-square-heart.svg";
const WishList = () => {
  return (
    <div className="widget">
      <img
        className="cart-widget"
        src={corazon}
        alt="icono para la wish list"
      />
    </div>
  );
};

export default WishList;
