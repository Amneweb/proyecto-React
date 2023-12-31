const HayStockBadge = ({ stock }) => {
  return (
    <span className="position-absolute badge fw-normal rounded-pill haystockbadge">
      Stock: {stock}
    </span>
  );
};

export default HayStockBadge;
