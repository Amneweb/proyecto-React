import { useState } from "react";
function ProductDetails(propsDetails) {
  const { nombreProducto, imagenProducto, detalleProducto, children } = propsDetails;
  const altProducto = "imagen de " + nombreProducto;
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
          <img src={imagenProducto} className="img-fluid rounded-start" alt={altProducto} />
        </div>
        {children}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombreProducto}</h5>
            <p className="card-text">{detalleProducto}</p>
            <p className="card-text"><small className="text-body-secondary">Cantidad en stock: 5</small></p>
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="row border border-contador rounded align-items-center">
                    <div className="col text-center">
                      <button className="btn btn-blanco" onClick={handleClickResta}>-</button>
                    </div>
                    <div className="col text-center">
                      <input className="input-contador" value={contador}></input>
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
export default ProductDetails;