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
  }).then((sagas) => {
    let fetchLibros = [];

    for (let i = 0; i < sagas.length; i++) {
      fetchLibros[i] = (sagas, i) => {
        return new Promise((resuelta, rechazada) => {
          const db = getFirestore();
          const itemsCollection = collection(db, "libros");
          console.log("sagas en fetch libros ", sagas[i], " id ", sagas[i]);
          const q = query(itemsCollection, where("saga", "==", sagas[i].id));
          getDocs(q).then(
            (snapshot) => {
              const libroSaga = snapshot.docs.map((doc) => ({
                IDfire: doc.id,
                ...doc.data(),
              }));
              resuelta(libroSaga);
            },
            () => {
              rechazada();
            }
          );
        });
      };
      console.log("libros ", Promise.all([...fetchLibros(sagas)]));
      Promise.all([fetchLibros(sagas), sagas]);
    }
  });
};

export const fetchLibrosDeSagas = (datosSagas) => {
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
  return Promise.all(promesas);
};
