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
    useEffect(() => {
        setLoader(true);
        fetchDatosLibros()
            .then((respuesta) => {
                if (categoria) {
                    setLibros(respuesta.filter((libro) => libro.genero.some((elem) => elem === categoria)));
                    fetchTituloCatePorID(categoria).then(
                        (respuesta) => setTituloCate(respuesta.titulo));
                } else {
                    setLibros(respuesta);
                    setTituloCate("Todos los libros");
                };

            }).finally(() => {
                setLoader(false);
            })
    }, [categoria])

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