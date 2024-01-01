import { Link } from "react-router-dom";
import { WishHeart } from "../iconos/WishHeart";
const WishList = () => {
  return (
    <div className="widget">
      <Link to="/wishlist">
        <WishHeart ancho="1.8em" alto="1.8em" />
      </Link>
    </div>
  );
};

export default WishList;
