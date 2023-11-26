import dataAutores from "../../data/dataAutores.json";

const AsideLinks = ({onAsideLinks}) => {
    function ordenarPorAutor( a, b ) {
        if ( a.nombre < b.nombre ){
          return -1;
        }
        if ( a.nombre > b.nombre ){
          return 1;
        }
        return 0;
      }
      
      dataAutores.sort( ordenarPorAutor );

function handleClickLista(e) {
    onAsideLinks(e.target.id);
    console.log("handleClickLista ",e.target.id)
}
;
  return (
    
        <ul className="enlacesAutores">
            {dataAutores.map((autor)=>
<li key={autor.id} >
   <button id={autor.id} onClick={handleClickLista} > {autor.nombre}</button>
</li>)}
        </ul>
    
  )
}

export default AsideLinks