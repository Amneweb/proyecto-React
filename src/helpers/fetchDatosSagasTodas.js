import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
export const fetchDatosSagasTodas = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "sagas");
    getDocs(itemsCollection).then((snapshot) => {
      const sagas = snapshot.docs.map((doc) => ({
        IDfire: doc.id,
        ...doc.data(),
      }));
      resuelta(sagas);
    });
  }).then((sagas) => {
    return new Promise(
      (resuelta, rechazada) => {
        const db = getFirestore();
        const itemsCollection = collection(db, "libros");
        let librosSagas = [];
        librosSagas = sagas.forEach((saga) =>
          getDocs(query(itemsCollection, where("saga", "==", saga.id))).then(
            (snapshot) => {
              snapshot.docs.map((doc) => ({
                IDfire: doc.id,
                ...doc.data(),
              }));
            }
          )
        );
        resuelta([sagas, librosSagas]);
      }
      //() => {
      //  rechazada();
      //}
    );
  });
};
