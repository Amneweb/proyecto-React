import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductCard from './components/ProductCard/ProductCard';
import LoadSpeaker1 from './productImages/LoudSpeakerNaranja1.jpg';
import LoadSpeaker2 from './productImages/LoudSpeakerNaranja2.jpg';
import LoadSpeaker3 from './productImages/LoudSpeakerNaranja3.jpg';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={'Bienvenidos a Amneweb'} />
      <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <ProductCard 
      nombreProducto = {'Posteo IG Importante naranja'}
      imagenProducto = {LoadSpeaker1}
      descripcionProducto = {'Imagen alertando sobre novedades en publicaciones de Instagram'}
      />
      <ProductCard 
      nombreProducto = {'Posteo IG Importante naranja combinado'}
      imagenProducto = {LoadSpeaker2}
      descripcionProducto = {'Imagen alertando sobre novedades en publicaciones de Instagram combinación 2'}
      />
      <ProductCard 
      nombreProducto = {'Posteo IG Importante naranja combinado'}
      imagenProducto = {LoadSpeaker3}
      descripcionProducto = {'Imagen alertando sobre novedades en publicaciones de Instagram combinación 2'}
      />
    </div>
    </div>
    </div>
  );
}

export default App;
