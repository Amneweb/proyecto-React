import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Suspense } from 'react';


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
      </Routes>

      </BrowserRouter>
   
    </div>
  );
}

export default App;
