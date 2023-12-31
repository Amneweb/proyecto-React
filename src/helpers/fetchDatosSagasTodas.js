import dataSagas from "../data/dataSagas.json";
import dataBooks from "../data/dataBooks.json";

export const fetchDatosSagasTodas = () => {
  console.log("en fetch sagas");
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
        console.log("data sagas en fetch segundo", librosSaga);
        const datosSagasLibros = [dataSagas, librosSaga];
        console.log("datos sagas libros en fetch ", datosSagasLibros);
        resolve(datosSagasLibros);
      }, 2000);
    });
  });
};
