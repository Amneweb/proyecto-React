import { useState, useEffect } from "react";
import { fetchDatosLibros, fetchTituloCatePorID } from '../../helpers/fetchDatosLibros';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
const ItemListContainer = () => {
    const [loader, setLoader] = useState(true);
    const [tituloCate, setTituloCate] = useState("");
    const [libros, setLibros] = useState([]);
    const categoria = useParams().categoria;
    const idioma = useParams().idioma;
    const nombreIdioma = idioma==="EN"?"Inglés":"Español";
    useEffect(() => {
        setLoader(true);
        fetchDatosLibros()
            .then((respuesta) => {
                if (categoria) {
                    setLibros(respuesta.filter((libro) => libro.genero.some((elem) => elem === categoria)));
                    fetchTituloCatePorID(categoria).then(
                        (respuesta) => setTituloCate(respuesta.titulo));
                } else {
                    if(idioma ) {
                        setLibros(respuesta.filter((libro) => libro.idioma.codigo === idioma));
                    setTituloCate("Libros en "+nombreIdioma);
                    } else {
                        setLibros(respuesta);
                    setTituloCate("Todos los libros");
                    }
                    
                };

            }).finally(() => {
                setLoader(false);
            })
    }, [categoria,idioma])

    return (
        <div className="container">
            {loader && <Loader />}
            <h2>{tituloCate && tituloCate}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <ItemList libros={libros} />
            </div>
        </div>
    )
}

export default ItemListContainer