import dataAutores from "../data/dataAutores.json";
export const fetchDatosAutor = (autorID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datosAutor = dataAutores.find(
        (autor) => autor.id === parseInt(autorID)
      );
      resolve(datosAutor);
    }, 1000);
  });
};
