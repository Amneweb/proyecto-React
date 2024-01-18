import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const MiCuenta = () => {
  const [formulario, setFormulario] = useState("signup");
  function handleClick(tipo) {
    setFormulario(tipo);
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
        setFormulario("bienvenido");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <div>
      <div className="col-4">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="d-grid">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  handleClick("signup");
                }}
              >
                Registrate
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-grid">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  handleClick("login");
                }}
              >
                Logueate
              </button>
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-grid">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  handleGoogle();
                }}
              >
                Registrate con Google
              </button>
            </div>
          </li>
        </ul>
      </div>

      <Modal formulario={formulario} />
    </div>
  );
};

export default MiCuenta;
