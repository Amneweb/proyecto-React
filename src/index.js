import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./helpers/subidaAfirebase.js";
import "./fonts/fonts.css";
import "./App.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp2QWYZa2Si8VJaWBIkYs21n8VuVjgYys",
  authDomain: "mw-libros.firebaseapp.com",
  projectId: "mw-libros",
  storageBucket: "mw-libros.appspot.com",
  messagingSenderId: "424330078680",
  appId: "1:424330078680:web:e040157af19f1edcbcaaad",
};

const appFire = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
