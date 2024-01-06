import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const fetchDatosSagasTodas = () => {
  console.log("en fetch sagas");
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
    return new Promise((resuelta, rechazada) => {
      const db = getFirestore();
      const itemsCollection = collection(db, "libros");
      const librosSaga = [];
      dataSagas.forEach((saga, key) => {
        getDocs(query(itemsCollection, where("saga", "==", Number(saga)))).then(
          (snapshot) => {
            const libros = snapshot.docs.map((doc) => ({
              IDfire: doc.id,
              ...doc.data(),
            }));
            resuelta(libros);
          },
          () => {
            rechazada();
          }
        );
        librosSaga[key] = resuelta;
      });
      resuelta([dataSagas, librosSaga]);

      console.log("data sagas en fetch segundo", librosSaga);

      console.log("datos sagas libros en fetch ", dataSagas);
    });
  });
};
