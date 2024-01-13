import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ContenedorAutor from "./components/ContenedorAutor/ContenedorAutor";
import ContenedorAutorTodos from "./components/ContenedorAutor/ContenedorAutorTodos";
import NoEncontrado from "./components/NoEncontrado/NoEncontrado";
import Busqueda from "./components/Busqueda/Busqueda";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Home from "./pages/Home";
import Novedades from "./components/Novedades/Novedades";
import ContenedorSagas from "./components/ContenedorSagas/ContenedorSagas";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [queryBusqueda, setQueryBusqueda] = useState("");

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter basename="/proyecto-React">
          <NavBar onQueryBusqueda={setQueryBusqueda} />

          <Routes>
            <Route path="/libro/:id" element={<ItemDetailContainer />} />
            <Route path="/libros" element={<ItemListContainer />} />
            <Route path="/libros/:categoria" element={<ItemListContainer />} />
            <Route path="/autor/:autor" element={<ContenedorAutor />} />
            <Route path="/autor/todos" element={<ContenedorAutorTodos />} />
            <Route path="/idioma/:idioma" element={<ItemListContainer />} />
            <Route path="/variante/:variante" element={<ItemListContainer />} />
            <Route path="/saga/:saga" element={<ContenedorSagas />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/busqueda"
              element={<Busqueda queryBusqueda={queryBusqueda} />}
            />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
