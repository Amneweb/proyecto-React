import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import dataCategorias from "../data/dataCategorias";

export const fetchDatosLibros = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    getDocs(itemsCollection).then((snapshot) => {
      resuelta(snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() })));
    });
  });
};

export const fetchDetallePorID = (id) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libro = query(
      itemsCollection,
      where("id", "==", Number(id)),
      limit(1)
    );
    getDocs(libro).then(
      (snapshot) => {
        resuelta(
          snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
        );
        console.log("en funcion fetchDetalle ", resuelta);
        console.log("snapshot", snapshot);
      },
      () => {
        rechazada();
      }
    );
  });
};

export const fetchCategorias = () => {
  return new Promise((resuelta, rechazada) => {
    resuelta(dataCategorias);
  });
};

export const fetchTituloCatePorID = (id) => {
  return new Promise((resuelta, rechazada) => {
    const title = dataCategorias.find((el) => el.id === id);
    if (title) {
      resuelta(title);
    } else {
      rechazada({ error: "no se encontró la categoría buscada" });
    }
  });
};
export const fetchLibrosPorAutor = (autorID) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(
      itemsCollection,
      where("autor.id", "==", Number(autorID))
    );
    getDocs(libros).then((snapshot) => {
      resuelta(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      rechazada("no se encontraron libros para ese autor");
    });
  });
};
