import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";

export const fetchDatosLibros = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");
    const libros = query(itemsCollection, orderBy("titulo"));
    getDocs(libros).then(
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
      },
      () => {
        rechazada();
      }
    );
  });
};

export const fetchCategorias = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categorias");

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

export const fetchLibrosPorAutor = (autorID) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(
      itemsCollection,
      where("autor.id", "==", Number(autorID))
    );
    getDocs(libros).then(
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

export const fetchLibrosPorCategoria = (cateID) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(
      itemsCollection,
      where("genero", "array-contains", cateID)
    );
    getDocs(libros).then(
      (snapshot) => {
        const librosPorCate = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(librosPorCate);
      },
      () => {
        rechazada();
      }
    );
  });
};
export const fetchTituloCatePorID = (id) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categorias");

    const categoria = query(itemsCollection, where("id", "==", id));
    getDocs(categoria).then(
      (snapshot) => {
        const datosCategoria = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(datosCategoria);
      },
      () => {
        rechazada();
      }
    );
  });
};
export const fetchLibrosPorIdioma = (id) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(itemsCollection, where("idioma.codigo", "==", id));
    getDocs(libros).then(
      (snapshot) => {
        resuelta(
          snapshot.docs.map((doc) => ({
            IDfire: doc.id,
            ...doc.data(),
          }))
        );
      },
      () => {
        rechazada();
      }
    );
  });
};

export const fetchLibrosPorVariante = (variante) => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(
      itemsCollection,
      where("variante.ediciones", "array-contains", variante)
    );
    getDocs(libros).then(
      (snapshot) => {
        const librosPorVariante = snapshot.docs.map((doc) => ({
          IDfire: doc.id,
          ...doc.data(),
        }));
        resuelta(librosPorVariante);
      },
      () => {
        rechazada();
      }
    );
  });
};
export const fetchNovedades = () => {
  return new Promise((resuelta, rechazada) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "libros");

    const libros = query(itemsCollection, where("novedad", "==", true));
    getDocs(libros).then(
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
