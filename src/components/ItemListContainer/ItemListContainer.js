import { useState, useEffect } from "react";
import { fetchDatosLibros } from '../../helpers/fetchDatosLibros';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
const ItemListContainer = () => {

    const [libros, setLibros] = useState([]);
    const categoria = useParams().categoria;
    useEffect(() => {
        fetchDatosLibros()
            .then((respuesta) => { 
                if (categoria) {
                    setLibros(respuesta.filter((libro) => libro.genero.some((elem)=>elem === categoria)));
                } else {
                    setLibros(respuesta);
                };
                
            })
    }, [categoria])

    return (


<div className="container">
      <h2>{categoria ? categoria : "Todos los libros"}</h2>
            <ItemList libros={libros} />
      
        </div>

    )

}

export default ItemListContainer