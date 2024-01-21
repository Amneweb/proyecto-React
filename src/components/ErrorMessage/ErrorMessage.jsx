import React from "react";

const ErrorMessage = ({ errorMsj }) => {
  return (
    <div className="alert alert-warning" role="alert">
      <h2>error</h2>
      <p>Lo sentimos, hubo un error al intentar loguearse.</p>
      <p className="fw-bold">{errorMsj} </p>
      <p>VOLVÉ A INTENTARLO</p>
    </div>
  );
};

export default ErrorMessage;
