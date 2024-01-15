import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../helpers/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ResetIcon } from "../iconos/ResetIcon";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const loguearUsuario = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="container">
      <h2>Log In</h2>
      <p className="small">
        Si ya tenés una cuenta, ingresá con email y password.
      </p>
      <form
        onSubmit={handleSubmit(loguearUsuario)}
        className="needs-validation"
      >
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
              No te olvides de ingresar tu clave
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
            <div className="col-auto">
              <Link
                role="button"
                to="/"
                data-bs-dismiss="modal"
                className="btn btn-outline-primary"
              >
                Cerrar y desestimar
              </Link>
            </div>
            <div>
              <p>
                ¿No tenés una cuenta? <Link to="/login">Creá una</Link> o comprá
                en forma anónima.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
