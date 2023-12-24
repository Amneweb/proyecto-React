import React from "react";
import bolsaVacia from "./emptyBag.png";
const BolsaVacia = () => {
  return (
    <div className="card mb-3 border">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={bolsaVacia}
            className="img-fluid rounded-start"
            alt="imagen de bolsa vacía"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h2 className="card-title">Tu bolsa está vacía</h2>
            <p className="card-text">
              Recorré nuestra tienda y encontrá el libro que tanto buscabas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BolsaVacia;
