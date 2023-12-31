import imagenesAutores from "../../helpers/imagenesAutores";
import noDisponible from "./assets/noDisponible.png";
const AsideAutor = ({ datosAutor }) => {
  const rutaImagen = imagenesAutores.find(
    ({ id }) => Number(id) === datosAutor.id
  )
    ? imagenesAutores.find(({ id }) => Number(id) === datosAutor.id).ruta
    : noDisponible;
  return (
    <>
      <h2>Sobre el autor</h2>
      <div>
        <img src={rutaImagen} alt={datosAutor.nombre} />
        <h3>Breve biografía</h3>
        <p>Fecha de nacimiento: {datosAutor.DOB}</p>

        <p>{datosAutor.biografia} </p>
      </div>
    </>
  );
};

export default AsideAutor;
