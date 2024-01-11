import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
export function useFilteredCollections(
  nombreColeccion,
  filtrarPor,
  operando,
  comparador
) {
  const [coleccion, setColeccion] = useState(null);
  useEffect(() => {
    let ignore = false;
    setColeccion(null);
    const db = getFirestore();
    const itemsCollection = collection(db, nombreColeccion);
    const q = query(itemsCollection, where(filtrarPor, operando, comparador));
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
  }, [comparador]);
  console.log("resultado filtered ", coleccion);
  return coleccion;
}
