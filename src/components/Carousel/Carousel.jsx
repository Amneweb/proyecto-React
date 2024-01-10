import React from "react";
import { useCollections } from "../../hooks/useCollections";
import CarouselIndicators from "./CarouselIndicators";
import CarouselInner from "./CarouselInner";

const Carousel = () => {
  const diapositivas = useCollections("carousel");

  return (
    <div className="container-fluid p-0">
      <div id="carouselHome" className="carousel slide">
        {diapositivas && <CarouselIndicators diapositivas={diapositivas} />}
        {diapositivas && <CarouselInner diapositivas={diapositivas} />}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
