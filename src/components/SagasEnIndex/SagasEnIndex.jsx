import React, { useEffect, useState } from "react";
import { fetchDatosSagasIndex } from "../../helpers/fetchDatosSagasIndex";
import SagasCard from "../SagasCard/SagasCard";

const SagasEnIndex = () => {
  const [sagas, setSagas] = useState([]);
  useEffect(() => {
    fetchDatosSagasIndex().then((respuesta) => setSagas(respuesta));
  }, []);
  console.log("en use effect ", sagas);
  const soloSagas = sagas[1];
  const soloLibros = sagas[0];

  return (
    <div className="container">
      <h2 className="titulos">sagas</h2>
      <div className="row row-cols-2">
        {soloSagas &&
          soloSagas.map((saga, llave) => (
            <SagasCard key={saga.id} saga={saga} libros={soloLibros[llave]} />
          ))}
      </div>
    </div>
  );
};

export default SagasEnIndex;
