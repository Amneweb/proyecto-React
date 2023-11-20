import { useState } from "react";
import imagenes from '../../helpers/imagenes';
import nodisponible from '../BookCard/assets/nodisponible.jpg';

const  BookDetails = ({ item }) => {
  const rutaImagen = imagenes.find(({ id }) => id === item.isbn) ? imagenes.find(({ id }) => id === item.isbn).ruta : nodisponible;

  const [contador, setContador] = useState(0);

  function handleClickSuma() {
    setContador(contador + 1);
  }
  function handleClickResta() {
    if (contador > 0) { setContador(contador - 1); }
  }
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={rutaImagen} className="img-fluid rounded-start" alt={item.titulo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{item.titulo}</h2>
            <p className="card-text">Categorías: {item.genero ? item.genero.join(", "): ""} </p>
            <p className="card-text">{item.descripcion}</p>
            <p className="card-text"><small className="text-body-secondary">Cantidad en stock: {item.stock}</small></p>
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="row border border-contador rounded align-items-center">
                    <div className="col text-center">
                      <button className="btn btn-blanco" onClick={handleClickResta}>-</button>
                    </div>
                    <div className="col text-center">
                      <input className="input-contador" value={contador} readOnly></input>
                    </div>
                    <div className="col text-center">
                      <button className="btn btn-blanco" onClick={handleClickSuma}>+</button>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookDetails
