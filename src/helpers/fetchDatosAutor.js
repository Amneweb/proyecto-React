import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
export const fetchDatosAutor = (autorID) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "autores");
    const autor = query(
      itemsCollection,
      where("id", "==", Number(autorID)),
      limit(1)
    );
    getDocs(autor).then((snapshot) => {
      resolve(snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() })));
    });
  });
};
export const fetchDatosAutorTodos = () => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();
    const autor = collection(db, "autores");

    getDocs(autor).then((snapshot) => {
      resolve(snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() })));
    });
  });
};
