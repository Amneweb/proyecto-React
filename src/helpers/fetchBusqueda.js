import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  or,
} from "firebase/firestore";
export const fetchBusqueda = (termino) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libro = query(
      itemsCollection,
      or(
        where("nombre", "isGreaterThanOrEqualTo", termino),
        where("autor.nombre", ">=", termino),
        where("descripcion", ">=", termino)
      )
    );
    getDocs(libro).then(
      (snapshot) => {
        resuelta(
          snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
        );
      },
      () => {
        rechazada();
      }
    );
  });
};
