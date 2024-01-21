import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import OrdenUsuario from "../OrdenUsuario/OrdenUsuario";
import { ordenarPorFecha } from "../../helpers/ordenarPorFecha";
import { formatearFecha } from "../../helpers/formatearFecha";
const ListadoOrdenesUsuario = () => {
  const { usuario } = useContext(AuthContext);

  const ordenes = useFilteredCollections(
    "ordenes",
    "cliente.uid",
    "==",
    usuario.uid
  );

  return (
    <div>
      {ordenes &&
        ordenarPorFecha(ordenes).map((orden) => (
          <div key={orden.IDfire}>
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold mt-3">Orden: {orden.IDfire}</h5>
              <p className="mt-3 fw-bold">
                Fecha: {formatearFecha(orden.fecha.seconds)}{" "}
              </p>
            </div>
            <OrdenUsuario orden={orden.compra} total={orden.total} />
          </div>
        ))}
    </div>
  );
};

export default ListadoOrdenesUsuario;
