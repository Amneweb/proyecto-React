import dataBooks from "../data/dataBooks";

export const fetchDatosNovedades = () => {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      const dataBooksFiltrado = dataBooks.filter((libro) =>
        libro.hasOwnProperty("novedad")
      );
      resuelta(dataBooksFiltrado);
    }, 2000);
  });
};
