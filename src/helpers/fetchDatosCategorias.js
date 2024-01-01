import dataCategorias from "../data/dataCategorias.json";
export const fetchDatosCategorias = () => {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      resuelta(dataCategorias);
    }, 2000);
  });
};
