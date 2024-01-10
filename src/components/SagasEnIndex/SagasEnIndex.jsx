import SagasCard from "../SagasCard/SagasCard";
import { useCollections } from "../../hooks/useCollections";
const SagasEnIndex = () => {
  const sagas = useCollections("sagas", "id");

  return (
    <div className="container">
      <h2 className="titulos">sagas</h2>
      <div className="row row-cols-2">
        {sagas && sagas.map((saga) => <SagasCard key={saga.id} saga={saga} />)}
      </div>
    </div>
  );
};

export default SagasEnIndex;
