import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
export const fetchDatosCategorias = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categorias");
    const cate = query(itemsCollection, orderBy("titulo"));
    getDocs(cate).then(
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
