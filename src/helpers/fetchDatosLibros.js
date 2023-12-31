import dataBooks from "../data/dataBooks";
import dataCategorias from "../data/dataCategorias";

export const fetchDatosLibros = () => {
  return new Promise((resuelta, rechazada) => {
    setTimeout(() => {
      resuelta(dataBooks);
    }, 2000);
  });
};

export const fetchDetallePorID = (id) => {
  return new Promise((resuelta, rechazada) => {
    const libro = dataBooks.find((el) => el.id === id);
    if (libro) {
      resuelta(libro);
    } else {
      rechazada({ error: "no se encontró el libro buscado" });
    }
  });
};

export const fetchCategorias = () => {
  return new Promise((resuelta, rechazada) => {
    resuelta(dataCategorias);
  });
};

export const fetchTituloCatePorID = (id) => {
  return new Promise((resuelta, rechazada) => {
    const title = dataCategorias.find((el) => el.id === id);
    if (title) {
      resuelta(title);
    } else {
      rechazada({ error: "no se encontró la categoría buscada" });
    }
  });
};
export const fetchLibrosPorAutor = (autorID) => {
  return new Promise((resuelta, rechazada) => {
    const libros = dataBooks.filter((el) => el.autor.id === autorID);
    if (libros) {
      resuelta(libros);
    } else {
      rechazada({ error: "no se encontró el libro buscado" });
    }
  });
};
