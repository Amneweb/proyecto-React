import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ContenedorAutor from "./components/ContenedorAutor/ContenedorAutor";
import ContenedorAutorTodos from "./components/ContenedorAutor/ContenedorAutorTodos";
import NoEncontrado from "./components/NoEncontrado/NoEncontrado";
import Busqueda from "./components/Busqueda/Busqueda";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";

function App() {
  const [queryBusqueda, setQueryBusqueda] = useState("");

  const [carrito, setCarrito] = useState([]);

  const alCarrito = (item, contador) => {
    const libroAgregado = { ...item, contador };

    const nuevoCarrito = [...carrito];
    const consultaRepetido = nuevoCarrito.find(
      (libro) => libro.id === libroAgregado.id
    );
    if (consultaRepetido) {
      consultaRepetido.contador += contador;
    } else {
      nuevoCarrito.push(libroAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const totalProductosEnCarrito = () => {
    return carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.contador,
      0
    );
  };
  const totalApagar = () => {
    return carrito.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.contador * elemento.precio,
      0
    );
  };
  const removerElemento = (item) => {
    const posicion = carrito.indexOf(item);
    const carritoSinElemento = carrito.toSpliced(posicion, 1);
    setCarrito(carritoSinElemento);
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          carrito,
          alCarrito,
          totalProductosEnCarrito,
          vaciarCarrito,
          removerElemento,
          totalApagar,
        }}
      >
        <BrowserRouter>
          <NavBar onQueryBusqueda={setQueryBusqueda} />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/libro/:id" element={<ItemDetailContainer />} />
            <Route path="/libros" element={<ItemListContainer />} />
            <Route path="/libros/:categoria" element={<ItemListContainer />} />
            <Route path="/autor/:autor" element={<ContenedorAutor />} />
            <Route path="/autor/todos" element={<ContenedorAutorTodos />} />
            <Route path="/idioma/:idioma" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route
              path="/busqueda"
              element={<Busqueda queryBusqueda={queryBusqueda} />}
            />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
