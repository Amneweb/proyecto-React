

import { useState } from 'react';
import AsideLinks from './AsideLinks';
import AutorList from './AutorList';


const ContenedorAutorTodos = () => {
  const [asideLinks,setAsideLinks]=useState("");

  
  return (
    <div className='container'>
        <div className="row">
          
        <div className="aside col-3 border rounded pe-4">
        <h4>Filtrar por autor </h4>
          <AsideLinks onAsideLinks={setAsideLinks} /> 
        </div>
      
        <div className="main-listado col-9">
        <div className="row row-cols-1 row-cols-md-3 g-4">
      <AutorList asideLinks={asideLinks} /> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default ContenedorAutorTodos