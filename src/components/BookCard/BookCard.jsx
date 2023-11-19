import imagenes from '../../helpers/imagenes';
import nodisponible from '../BookCard/assets/nodisponible.jpg';
import StockBadge from '../StockBadge/StockBadge';
const LibroCard = ({ libro }) => {
  const rutaImagen = imagenes.find(({ id }) => id === libro.isbn
  ) ? imagenes.find(({ id }) => id === libro.isbn
  ).ruta : nodisponible;
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card" id={libro.id}>
          <img src={rutaImagen} className="card-img-top" alt={libro.titulo} />
          <div className="card-body">
            <h5 className="card-title">{libro.titulo}</h5>
            <p className="card-text">Autor: {libro.autor}</p>
            <div className="row">
              <div className="col-4">
            <p className="small">Stock:{libro.stock} </p>
            </div>
            <div className="col-8">
            <p>Precio: ${libro.precio}</p>
            </div>
            </div>
            <div className="row card__botones">
              <a href="#" className="btn btn-primary card__boton card__boton-ver">Ver</a>
              <a href="#" className="btn btn-primary card__boton card__boton-comprar">Comprar</a>
            </div>
          </div>
          {libro.stock===0 && <StockBadge />}
          
          
        </div>
      </div>
    </div>
  )
}
export default LibroCard