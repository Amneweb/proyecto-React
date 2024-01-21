import React, { useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";
import Bienvenido from "../Bienvenido/Bienvenido";
const Loguearse = () => {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  if (usuarioRegistrado) {
    return <Bienvenido usuarioRegistrado={usuarioRegistrado} />;
  }

  const handleGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("credential from sign in ", credential);
        const user = result.user;
        console.log("usuario de google recién creado", user);
        setUsuarioRegistrado(user);
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        "error code ",
        errorCode,
        "error msj ",
        errorMessage,
        "credential from error ",
        credential
      );
    }
  };

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

export default Loguearse;
