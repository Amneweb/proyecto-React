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
    let ignore = false;
    setColeccion(null);
    const db = getFirestore();
    const itemsCollection = collection(db, nombreColeccion);
    const q = ordenarPor
      ? query(itemsCollection, orderBy(ordenarPor))
      : query(itemsCollection);
    getDocs(q).then((snapshot) => {
      if (!ignore) {
        setColeccion(
          snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
        );
      }
    });
    return () => {
      ignore = true;
    };
  }, [nombreColeccion, ordenarPor]);

  return coleccion;
}
