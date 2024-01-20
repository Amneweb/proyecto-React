import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useFilteredCollections } from "../../hooks/useFilteredCollections";
import OrdenUsuario from "../OrdenUsuario/OrdenUsuario";

const ListadoOrdenesUsuario = () => {
  const { usuario } = useContext(AuthContext);

  console.log("usuario en listado ordenes ", usuario);
  const ordenes = useFilteredCollections(
    "ordenes",
    "cliente.uid",
    "==",
    usuario.uid
  );

  return (
    <div>
      {ordenes &&
        ordenes.map((orden) => (
          <div>
            <h5 className="fw-bold mt-3">Orden: {orden.IDfire} </h5>
            <OrdenUsuario orden={orden.compra} total={orden.total} />
          </div>
        ))}
    </div>
  );
};

export default ListadoOrdenesUsuario;
