import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
export const fetchDatosSagas = (sagaID) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "sagas");

    const saga = query(itemsCollection, where("id", "==", Number(sagaID)));
    getDocs(saga).then(
      (snapshot) => {
        const sagaSeleccionada = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(sagaSeleccionada);
      },
      () => {
        rechazada();
      }
    );
  }).then((sagaSeleccionada) => {
    return new Promise((resuelta, rechazada) => {
      const db = getFirestore();
      const itemsCollection = collection(db, "autores");

      const autores = query(
        itemsCollection,
        where("id", "==", sagaSeleccionada[0].autor.id)
      );
      getDocs(autores).then(
        (snapshot) => {
          const autorSaga = snapshot.docs.map((doc) => ({
            IDfire: doc.id,
            ...doc.data(),
          }));
          resuelta([sagaSeleccionada, autorSaga]);
        },
        () => {
          rechazada();
        }
      );
    });
  });
};
export const fetchLibrosDeSagas = (sagaID) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(itemsCollection, where("saga", "==", Number(sagaID)));
    getDocs(libros).then(
      (snapshot) => {
        const librosSaga = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(librosSaga);
      },
      () => {
        rechazada();
      }
    );
  });
};
