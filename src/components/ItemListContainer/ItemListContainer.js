import { useState, useEffect } from "react";
import { fetchDatosLibros } from '../../helpers/fetchDatosLibros';
import ItemList from '../ItemList/ItemList';
const ItemListContainer = () => {

    const [libros, setLibros] = useState([]);
    useEffect(() => {
        fetchDatosLibros()
            .then((respuesta) => {
                setLibros(respuesta);
            })
    }, [])

    return (


<div className="container">
      
            <ItemList libros={libros} />
      
        </div>

    )

}

export default ItemListContainer