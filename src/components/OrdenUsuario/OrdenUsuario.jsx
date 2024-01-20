import React from "react";

import { precioFormateado } from "../../helpers/formatearPrecios";

const OrdenUsuario = ({ orden, total }) => {
  return (
    <>
      <div className="list-group">
        {orden.map((compra) => (
          <div key={compra.id} className="list-group-item">
            <div className="d-flex w-100 justify-content-between my-0">
              <p className="fw-bold small mb-0">{compra.titulo} </p>
              <p className="small mb-0">
                Cantidad: <span className="fw-bold">{compra.contador}</span>{" "}
              </p>
            </div>
            <div className="d-flex w-100 justify-content-between my-0">
              <p className="small mb-0">Autor/a: {compra.autor.nombre} </p>
              <p className="small mb-0">ISBN: {compra.isbn} </p>
            </div>
          </div>
        ))}
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h3>Pagaste: </h3>
            <h3>{precioFormateado.format(total)} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdenUsuario;
