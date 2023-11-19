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