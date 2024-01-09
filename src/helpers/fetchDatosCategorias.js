import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
export const fetchDatosCategorias = () => {
  console.log("en fetch");
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categorias");
    const cate = query(itemsCollection, orderBy("titulo"));
    getDocs(cate).then(
      (snapshot) => {
        resuelta(
          snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
        );
        console.log("snap ", snapshot.docs);
      },
      () => {
        rechazada();
      }
    );
  });
};
