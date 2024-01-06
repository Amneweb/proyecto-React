import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const fetchDatosSagasIndex = () => {
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
  }).then((datosSagas) => {
    //empiezaa callback con dataSagaas
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    //empieza funcion libros de sagas
    let promesas = [];

    for (let i = 0; i < datosSagas.length; i++) {
      const q = query(
        itemsCollection,
        where("saga", "==", Number(datosSagas[i].id))
      );

      promesas[i] = getDocs(q);
    }
    Promise.all(promesas).then((snapshots) => {
      let librosDeSaga = [];
      snapshots.forEach((snapshot, key) => {
        librosDeSaga[key] = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
      });
    });
  }); //termina callback con dataSagas
};
