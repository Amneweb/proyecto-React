import React, { useState } from "react";
import { auth } from "../../helpers/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { ResetIcon } from "../iconos/ResetIcon";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const SignUp = ({ onSignUp }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(false);
  const [errorMsj, setErrorMsj] = useState("");
  const crearUsuario = async (data) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: data.displayName,
        }).then(() => onSignUp(userCredential.user));
      });
    } catch (e) {
      const errorCode = e.code;
      console.log("error code", errorCode);
      switch (errorCode) {
        case "auth/invalid-credential":
          setErrorMsj("Los datos de login son erróneos");

          break;
        case "auth/email-already-exists":
          setErrorMsj("La casilla de correo ya está registrada");
          break;
        case "auth/email-already-in-use":
          setErrorMsj(
            "Ya existe un usuario registrado con esa casilla de correo"
          );
        case "auth/uid-already-exists":
          setErrorMsj("El usuario ya existe en nuestra base de datos");
          break;
        default:
          setErrorMsj("Error desconocido");
      }
    }

    setError(true);
  };

  return (
    <div className="container">
      {error && <ErrorMessage errorMsj={errorMsj} />}
      <h2>Crear cuenta</h2>
      <p className="small">Si NO tenés una cuenta, ¡registrate! 😄.</p>
      <form onSubmit={handleSubmit(crearUsuario)} className="needs-validation">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="signUpFormNombreUsuario"
            placeholder="Nombre o apodo"
            {...register("displayName", { required: true })}
          />
          {errors.displayName && (
            <span className="badge text-bg-danger">
              El nombre de usuario es requerido
            </span>
          )}
          <label htmlFor="signUpFormNombreUsuario">Nombre de usuario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="signUpFormEmail"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="badge text-bg-danger">El email es requerido</span>
          )}
          <label htmlFor="signUpFormEmail">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="signUpFormPassword"
            placeholder="min 7 caracteres"
            {...register("password", {
              required: true,
              minLength: 7,
            })}
          />
          {errors.password && (
            <span className="badge text-bg-danger">
              Debés generar un password de al menos 7 caracteres
            </span>
          )}
          <label htmlFor="signUpFormPassword">Password</label>
        </div>

        <div className="form-floating">
          <div className="row">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Registrarme
              </button>
            </div>
            <div className="col-auto">
              <button
                type="reset"
                className="btn btn-primary"
                onClick={() => reset()}
              >
                <ResetIcon lado="1em" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
