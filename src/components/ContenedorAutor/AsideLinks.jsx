import dataAutores from "../../data/dataAutores.json";

const AsideLinks = () => {
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
    const enlaces = dataAutores.map((autor)=>
<li key={autor.id} >
    {autor.nombre}
</li>
    );
  return (
    <div>
        <ul>
            {enlaces}
        </ul>
    </div>
  )
}

export default AsideLinks