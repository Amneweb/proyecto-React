import dataSagas from "../data/dataSagas.json";
import dataBooks from "../data/dataBooks.json";

export const fetchDatosSagasTodas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataSagas);
    }, 1000);
  }).then((dataSagas) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const librosSaga = [];
        dataSagas.forEach((saga, key) => {
          librosSaga[key] = dataBooks.filter((book) => book.saga === saga.id);
        });
        const datosSagasLibros = [dataSagas, librosSaga];

        resolve(datosSagasLibros);
      }, 2000);
    });
  });
};
