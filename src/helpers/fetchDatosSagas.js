import dataSagas from "../data/dataSagas.json";
import dataBooks from "../data/dataBooks.json";
import dataAutores from "../data/dataAutores.json";
export const fetchDataSagas = (sagaID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sagaSeleccionada = dataSagas.find(
        (saga) => saga.id === parseInt(sagaID)
      );
      resolve(sagaSeleccionada);
    }, 1000);
  }).then((sagaSeleccionada) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const autorSaga = dataAutores.find(
          (autor) => autor.id === sagaSeleccionada.autor.id
        );
        resolve([sagaSeleccionada, autorSaga]);
      }, 1000);
    });
  });
};

export const fetchLibrosDeSagas = (sagaID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const librosDeSaga = dataBooks
        .filter((libro) => libro.hasOwnProperty("saga"))
        .filter((libro) => libro.saga === parseInt(sagaID));
      resolve(librosDeSaga);
      console.log("libros de saga en promise ", librosDeSaga);
    }, 1500);
  });
};
