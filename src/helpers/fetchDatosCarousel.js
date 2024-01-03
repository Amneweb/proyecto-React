import { getFirestore, collection, getDocs } from "firebase/firestore";

export const fetchDatosCarousel = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "carousel");

    getDocs(itemsCollection).then(
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
