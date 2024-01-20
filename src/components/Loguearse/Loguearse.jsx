import React, { useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";
import Bienvenido from "../Bienvenido/Bienvenido";
const MiCuenta = () => {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  if (usuarioRegistrado) {
    return <Bienvenido usuarioRegistrado={usuarioRegistrado} />;
  }

  function handleGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log("usuario de google recién creado", user);
        setUsuarioRegistrado(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-6">
          <Login onLogin={setUsuarioRegistrado} />
        </div>
        <div className="col col-sm-6">
          <SignUp onSignUp={setUsuarioRegistrado} />
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <Link
            role="button"
            to="/"
            className="btn btn-outline-primary"
            onClick={handleGoogle}
          >
            Registrarme con Google
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
