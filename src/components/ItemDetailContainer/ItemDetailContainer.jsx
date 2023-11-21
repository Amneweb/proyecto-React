import { useState, useEffect } from "react";
import { fetchDetallePorID } from "../../helpers/fetchDatosLibros";
import  BookDetails  from "../BookDetails/BookDetails";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [libro, setLibro] = useState(null);
const id = useParams().id;
    useEffect(() => {
        fetchDetallePorID(Number(id))
            .then((respuesta) => {
                setLibro(respuesta);
            })
    }, [id])
    return (
        <div className="container">
            <h2>Detalle del libro buscado</h2>
            { libro && <BookDetails item={libro} />}
            
        </div>
    )
}

export default ItemDetailContainer