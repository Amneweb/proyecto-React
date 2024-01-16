import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mw-libros.firebaseapp.com",
  projectId: "mw-libros",
  storageBucket: "mw-libros.appspot.com",
  messagingSenderId: "424330078680",
  appId: "1:424330078680:web:e040157af19f1edcbcaaad",
};

export const appFire = initializeApp(firebaseConfig);