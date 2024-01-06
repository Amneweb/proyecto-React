import React, { useEffect, useState } from "react";
import { fetchDatosSagasIndex } from "../../helpers/fetchDatosSagasIndex";
import { fetchLibrosDeSagas } from "../../helpers/fetchDatosSagas";
import SagasCard from "../SagasCard/SagasCard";
import Loader from "../Loader/Loader";

const SagasEnIndex = () => {
  const [sagas, setSagas] = useState([]);
  const [librosDeSagas, setLibrosDeSagas] = useState([]);
  const [loader, setLoader] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetchDatosSagasIndex()
      .then(([libros, saga]) => {
        console.log("spread libros ", libros);
        setLibrosDeSagas(libros);
        setSagas(saga);
      })

      .finally(() => {
        setLoader(false);
      });
  }, []);
  console.log("en use effect ", sagas);
  console.log("libros en use effect ", librosDeSagas);

  return (
    <div className="container">
      {loader && <Loader />}
      <h2 className="titulos">sagas</h2>
      <div className="row row-cols-2">
        {sagas &&
          sagas.map((saga, llave) => (
            <SagasCard
              key={saga.id}
              saga={saga}
              libros={librosDeSagas[llave]}
            />
          ))}
      </div>
    </div>
  );
};

export default SagasEnIndex;
