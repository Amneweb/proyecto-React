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

function App() {
  const [queryBusqueda, setQueryBusqueda] = useState("");
  const [carrito, setCarrito] = useState([]);
  console.log("carrito al ppio de App ", carrito);
  return (
    <div className="App">
      <CartContext.Provider value={{ carrito, setCarrito }}>
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
