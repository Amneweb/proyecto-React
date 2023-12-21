import notFound from './notFound.png';
const NoEncontrado = () => {
  return (
    <div className='container text-center'> 
    <div className='row justify-content-center'>
      <div className="col col-lg-6">
     <h1 className='h__notfound'>ERROR 404</h1>
     <img className='img__notfound' src={notFound} alt="imagen de No encontrado" />
     <h2 className='h__notfound'>Página no encontrada</h2>
     <p>Lo sentimos, no encontramos lo que buscabas.</p>
      </div>
      </div>
      </div>
  )
}

export default NoEncontrado