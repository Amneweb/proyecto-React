import dataBooks from '../data/dataBooks';
import dataCategorias from '../data/dataCategorias';
export const fetchDatosLibros = () => {
    return new Promise((resuelta, rechazada) => {
        setTimeout(
            () => {
                resuelta(dataBooks);
            }, 2000
        )
    })
}

export const fetchDetallePorID = (id) => {
    
    return new Promise((resuelta, rechazada) => {
       const libro = dataBooks.find((el)=>el.id === id);
       if (libro) {
resuelta(libro)
       } else {
        rechazada({error: "no se encontró el libro buscado"})

       }
    })

}
export const fetchTituloCategoria = (cateID) => {
    console.log ("cate en fetchTitulo ",cateID);
return new Promise((resuelta, rechazada) => {
    const cate = dataCategorias.find((el) => el.id === cateID);
    console.log ("cate en promise ",cate)
if (cate) {
    resuelta(cate)
} else {
    rechazada ({error: "no hay categorías con ese ID"})
}
})

}