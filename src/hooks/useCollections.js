import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
export function useCollections(nombreColeccion, ordenarPor) {
  const [coleccion, setColeccion] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, nombreColeccion);
    const q = ordenarPor
      ? query(itemsCollection, orderBy(ordenarPor))
      : query(itemsCollection);
    getDocs(q).then((snapshot) => {
      setColeccion(
        snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
      );
    });
  }, []);

  return coleccion;
}
