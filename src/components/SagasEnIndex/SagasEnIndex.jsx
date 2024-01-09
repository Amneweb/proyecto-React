import React, { useEffect, useState } from "react";
import { fetchDatosSagasTodas } from "../../helpers/fetchDatosSagasTodas";
import SagasCard from "../SagasCard/SagasCard";

const SagasEnIndex = () => {
  const [sagas, setSagas] = useState([]);
  useEffect(() => {
    fetchDatosSagasTodas().then((respuesta) => setSagas(respuesta));
  }, []);

  const soloSagas = sagas[0];
  const soloLibros = sagas[1];

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
