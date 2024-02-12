import SagasCard from "../SagasCard/SagasCard";
import { useCollections } from "../../hooks/useCollections";
const SagasEnIndex = () => {
  const sagas = useCollections("sagas", "id");

  return (
    <div className="container">
      <h2 className="titulos">sagas</h2>
      <p>
        Para los fanáticos de las novelas que empiezan y no se sabe dónde
        terminan, tenemos un amplio stock de 'sagas' y colecciones de novelas,
        clásicas y no tanto.
      </p>
      <div className="row row-cols-2">
        {sagas && sagas.map((saga) => <SagasCard key={saga.id} saga={saga} />)}
      </div>
    </div>
  );
};

export default SagasEnIndex;
