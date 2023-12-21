import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import dataAutoresFire from "../data/dataAutoresFire.json";
const firebaseConfig = {
  apiKey: "AIzaSyAp2QWYZa2Si8VJaWBIkYs21n8VuVjgYys",
  authDomain: "mw-libros.firebaseapp.com",
  projectId: "mw-libros",
  storageBucket: "mw-libros.appspot.com",
  messagingSenderId: "424330078680",
  appId: "1:424330078680:web:e040157af19f1edcbcaaad",
};

initializeApp(firebaseConfig);

// const subirLibros = () => {
//   const db = getFirestore();
//   const librosCollection = collection(db, "libros");

//   dataBooksFire.forEach((libro) => addDoc(librosCollection, libro));
// };
// subirLibros();

// const subirCategorias = () => {
//   const db = getFirestore();
//   const categoriasCollection = collection(db, "categorias");

//   dataCategoriasFire.forEach((categoria) =>
//     addDoc(categoriasCollection, categoria)
//   );
// };
// subirCategorias();

const subirAutores = () => {
  const db = getFirestore();
  const autoresCollection = collection(db, "autores");

  dataAutoresFire.forEach((autor) => addDoc(autoresCollection, autor));
};
subirAutores();
