import React from "react";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { CloseCircle } from "../../../iconos/CloseCircle";
const ContadoresEnCarrito = ({
  estadoContador,
  handleSumarAgregar,
  handleRestarRemover,
  item,
}) => {
  const [tool, setTool] = useState(false);
  useEffect(() => {
    estadoContador === item.stock ? setTool(true) : setTool(false);
  }, [estadoContador]);
  return (
    <div className="item-flex carrito__contador d-flex flex-column">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-secondary card__boton-ver"
          onClick={() => handleRestarRemover(item)}
        >
          -
        </button>
        <button
          type="button"
          className="btn small btn-outline-secondary card__boton-ver"
        >
          {estadoContador}
        </button>
        <button
          data-tooltip-id="sinstock"
          type="button"
          className="btn btn-outline-secondary card__boton-ver"
          onClick={() => handleSumarAgregar(item)}
        >
          +
        </button>
      </div>
      {tool && (
        <Tooltip id="sinstock" openOnClick="true" closeEvents="click">
          <p className="lh-1 mb-0">No hay más stock</p>
          <p className="text-center lh-2 mb-0 en-tooltip">
            <CloseCircle ancho="0.8em" alto="0.8em" />
          </p>
        </Tooltip>
      )}
      <p className="small mt-2 align-self-center">Stock: {item.stock}</p>
    </div>
  );
};

export default ContadoresEnCarrito;
