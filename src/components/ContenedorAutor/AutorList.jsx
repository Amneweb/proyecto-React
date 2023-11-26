import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react'
import { fetchDatosLibros } from '../../helpers/fetchDatosLibros';
import ItemList from '../ItemList/ItemList';

const AutorList = ({asideLinks}) => {
const [libros, setLibros] = useState([]);

const [loader,setLoader] = useState(true);
const autor = asideLinks;
useEffect(() => {
    setLoader(true);
    fetchDatosLibros()
        .then((respuesta) => {
            if (autor) {
                setLibros(respuesta.filter((libro)  => libro.autor.id === Number(autor)));
            } else {
              function ordenarPorAutor( a, b ) {
                if ( a.autor.nombre < b.autor.nombre ){
                  return -1;
                }
                if ( a.autor.nombre > b.autor.nombre ){
                  return 1;
                }
                return 0;
              }
              
              respuesta.sort( ordenarPorAutor );
                setLibros(respuesta);
            };

        }).finally(() => {
            setLoader(false);
        })

}, [autor])




  return (
    <>
         {loader && <Loader />}
        <ItemList libros={libros} /></>
  )
}

export default AutorList