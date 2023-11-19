import {useState,useEffect} from "react";
import {fetchDatosLibros} from '../../helpers/fetchDatosLibros';
const ItemListContainer =()=>{

    const [libros, setLibros] = useState([]);
    console.log(libros);
useEffect(() => {
  fetchDatosLibros()
  .then((respuesta) => {
setLibros(respuesta);
  }

  )
}, [])


    return (
        <div>
            <h1 className="bienvenidos"></h1>
        </div>
    )

}

export default ItemListContainer