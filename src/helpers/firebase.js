import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAp2QWYZa2Si8VJaWBIkYs21n8VuVjgYys",
  authDomain: "mw-libros.firebaseapp.com",
  projectId: "mw-libros",
  storageBucket: "mw-libros.appspot.com",
  messagingSenderId: "424330078680",
  appId: "1:424330078680:web:e040157af19f1edcbcaaad",
};

export const appFire = initializeApp(firebaseConfig);
export const auth = getAuth(appFire);
