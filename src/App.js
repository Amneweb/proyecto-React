import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ContenedorAutor from './components/ContenedorAutor/ContenedorAutor';
import NoEncontrado from './components/NoEncontrado/NoEncontrado';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
     
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/libro/:id" element={<ItemDetailContainer />} />
        <Route path="/libros" element={<ItemListContainer />} />
        <Route path="/libros/:categoria" element={<ItemListContainer />} />
        <Route path="/autor/:autor" element={<ContenedorAutor />} />
        <Route path="/autor/" element={<ContenedorAutor />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>

      </BrowserRouter>
   
    </div>
  );
}

export default App;
