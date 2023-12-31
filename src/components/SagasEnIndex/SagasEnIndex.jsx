import React, { useEffect, useState } from "react";
import { fetchDatosSagasTodas } from "../../helpers/fetchDatosSagasTodas";
import SagasCard from "../SagasCard/SagasCard";

const SagasEnIndex = () => {
  console.log("sagas en index");
  const [sagas, setSagas] = useState([]);
  useEffect(() => {
    fetchDatosSagasTodas().then((respuesta) => setSagas(respuesta));
  }, []);
  console.log("sagas en index seteadas ", sagas);
  const soloSagas = sagas[0];
  const soloLibros = sagas[1];
  console.log("solo libros ", soloLibros);

  return (
    soloSagas &&
    soloSagas.map((saga, llave) => (
      <SagasCard key={saga.id} saga={saga} libros={soloLibros[llave]} />
    ))
  );
};

export default SagasEnIndex;
