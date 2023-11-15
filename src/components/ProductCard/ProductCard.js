function ProductCard(propsProducto) {
const {nombreProducto,imagenProducto,introProducto} = propsProducto;
const altProducto="imagen de "+nombreProducto;
return (
    <div className="col">
    <div className="card h-100">
    <div className="card">
  <img src={imagenProducto} class="card-img-top" alt={altProducto} />
  <div className="card-body">
    <h5 className="card-title">{nombreProducto}</h5>
    <p className="card-text">{introProducto}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  </div>
</div>
)
}
export default ProductCard;