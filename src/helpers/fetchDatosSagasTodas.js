import { getFirestore, collection, getDocs } from "firebase/firestore";
import dataBooks from "../data/dataBooks.json";
export const fetchDatosSagasTodas = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "sagas");
    getDocs(itemsCollection).then(
      (snapshot) => {
        const dataSagas = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(dataSagas);
      },
      () => {
        rechazada();
      }
    );
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
