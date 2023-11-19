import { useState } from "react";
function ProductCard(propsProducto) {
  const { nombreProducto, imagenProducto, introProducto, children } = propsProducto;
  const altProducto = "imagen de " + nombreProducto;
  const [contador, setContador] = useState(0);

  function handleClickSuma() {
    setContador(contador + 1);
  }
  function handleClickResta() {
    if (contador > 0) { setContador(contador - 1); }

  }
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card" id={nombreProducto}>
          <img src={imagenProducto} class="card-img-top" alt={altProducto} />
          <div className="card-body">
            <h5 className="card-title">{nombreProducto}</h5>
            <p className="card-text">{introProducto}</p>
            <div className="row card__botones">
              <a href="#" className="btn btn-primary card__boton card__boton-ver">Ver</a>
              <a href="#" className="btn btn-primary card__boton card__boton-comprar">Comprar</a>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
export default ProductCard;