import React from 'react'
import AsideAutor from './AsideAutor'
import ItemList from '../ItemList/ItemList'

const ContenedorAutor = () => {
  return (
    <div className='container'>
        <div className="row">
        <div className="aside col-4">
            <AsideAutor />
        </div>
        <div className="main-listado col-8">
            aca van los libros
        </div>
    </div>
    </div>
  )
}

export default ContenedorAutor