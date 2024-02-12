import imagenesAutores from "../../helpers/imagenesAutores";
import noDisponible from "./assets/noDisponible.png";
import { Sad } from "../iconos/Sad";
const AsideAutor = ({ datosAutor }) => {
  const rutaImagen = imagenesAutores.find(
    ({ id }) => Number(id) === datosAutor.id
  )
    ? imagenesAutores.find(({ id }) => Number(id) === datosAutor.id).ruta
    : noDisponible;
  return (
    <>
      <h2 className="card-title">Sobre el autor</h2>
      <div>
        <img src={rutaImagen} alt={datosAutor.nombre} />

        {datosAutor.biografia ? (
          <>
            <h3>Breve biografía</h3>
            <p>Fecha de nacimiento: {datosAutor.DOB}</p>

            <p>{datosAutor.biografia} </p>
          </>
        ) : (
          <p>
            <Sad lado="1.5em" /> Lo sentimos, aun no tenemos la información de
            este autor. En breve la publicaremos. Si tenés unos segundos, por
            favor envianos un email reportando la situación. ¡¡GRACIAS!!
          </p>
        )}
      </div>
    </>
  );
};

export default AsideAutor;
