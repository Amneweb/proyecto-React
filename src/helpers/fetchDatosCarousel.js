import dataCarousel from "../data/dataCarousel.json";

export const fetchDatosCarousel = () => {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      resuelta(dataCarousel);
    }, 1000);
  });
};
