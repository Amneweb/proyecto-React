import React from "react";

const CarouselIndicators = ({ diapositivas }) => {
  return (
    <div className="carousel-indicators">
      {diapositivas.map((diapositiva, key) => (
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to={key}
          className={key === 0 ? `active` : ``}
          aria-current="true"
          aria-label={diapositiva.img}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
