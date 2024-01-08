import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import dataBooks from "../data/dataBooks.json";
import dataCategorias from "../data/dataCategorias.json";
import dataSagas from "../data/dataSagas.json";
import dataAutores from "../data/dataAutores.json";
import dataCarousel from "../data/dataCarousel.json";

export const SubidaAfire = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAp2QWYZa2Si8VJaWBIkYs21n8VuVjgYys",
    authDomain: "mw-libros.firebaseapp.com",
    projectId: "mw-libros",
    storageBucket: "mw-libros.appspot.com",
    messagingSenderId: "424330078680",
    appId: "1:424330078680:web:e040157af19f1edcbcaaad",
  };

  initializeApp(firebaseConfig);

  const subirLibros = () => {
    const db = getFirestore();
    const librosCollection = collection(db, "libros");

    dataBooks.forEach((libro) => addDoc(librosCollection, libro));
  };

  const subirCategorias = () => {
    const db = getFirestore();
    const categoriasCollection = collection(db, "categorias");

    dataCategorias.forEach((categoria) =>
      addDoc(categoriasCollection, categoria)
    );
  };

  const subirAutores = () => {
    const db = getFirestore();
    const autoresCollection = collection(db, "autores");

    dataAutores.forEach((autor) => addDoc(autoresCollection, autor));
  };

  const subirSagas = () => {
    const db = getFirestore();
    const sagasCollection = collection(db, "sagas");

    dataSagas.forEach((saga) => addDoc(sagasCollection, saga));
  };

  const subirCarousel = () => {
    const db = getFirestore();
    const carouselCollection = collection(db, "carousel");

    dataCarousel.forEach((carousel) => addDoc(carouselCollection, carousel));
  };

  const borrarOrdenes = () => {
    console.log("en borrar ordenes");
    return new Promise((resuelta, rechazada) => {
      const db = getFirestore();
      const ordenesCollection = collection(db, "ordenes");

      getDocs(ordenesCollection).then(
        (snapshot) => {
          resuelta(
            snapshot.docs.map((doc) => ({ IDfire: doc.id, ...doc.data() }))
          );
        },
        () => {
          rechazada();
        }
      );
    }).then((respuesta) => {
      console.log("respuesta ", respuesta);
      const db = getFirestore();
      respuesta.forEach((cadarespuesta) =>
        deleteDoc(doc(db, "ordenes", cadarespuesta.IDfire))
      );
    });
  };
  borrarOrdenes();
};
