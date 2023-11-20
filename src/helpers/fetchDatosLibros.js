import dataBooks from '../data/dataBooks';
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
