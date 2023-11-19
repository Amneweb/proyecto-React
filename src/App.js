import NavBar from './components/NavBar/NavBar';
import StockBadge from './components/StockBadge/StockBadge';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductCard from './components/ProductCard/ProductCard';
import ProductDetails from './components/ProductoDetails/ProductDetails';
import Isbn9788417127503 from './productImages/9788417127503.jpg';
import Isbn9788490566244 from './productImages/9788490566244.jpg';
import Isbn9788491870074 from './productImages/9788491870074.jpg';
import Isbn9789500769013 from './productImages/9789500769013.jpg';
import Isbn9789500758796 from './productImages/9789500758796.jpg';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={'Bienvenidos a Amneweb'} />
      <div className="container">
      <div className="row row-cols-1 row-cols-md-4 g-4">
      <ProductCard 
      nombreProducto = {'20000 leguas de viaje submarino'}
      imagenProducto = {Isbn9788417127503}
      descripcionProducto = {'Nueva traduccion en tapa dura con sobrecubierta que se convierte en poster.'}
      />
      <ProductCard 
      nombreProducto = {'Cinco semanas en globo'}
      imagenProducto = {Isbn9788490566244}
      descripcionProducto = {'Impresión 2023 de un clásico que no pierde vigencia'}
      />
      <ProductCard 
      nombreProducto = {'Miguel Strogoff'}
      imagenProducto = {Isbn9788491870074}
      descripcionProducto = {'¿Quién podrá avisar a tiempo al hermano del zar del grave peligro que corre?'}
      />
      <ProductCard 
      nombreProducto = {'Cien años de soledad'}
      imagenProducto = {Isbn9789500758796}
      descripcionProducto = {'Edición especial 50 aniversario'}
      />
      <ProductCard 
      nombreProducto = {'El viento conoce mi nombre'}
      imagenProducto = {Isbn9789500769013}
      descripcionProducto = {'Nueva novela de la autora chilena'}
      >
        <StockBadge />
      </ProductCard>
    </div>
    </div>
    <div className="container-fluid">
      <ProductDetails 
      nombreProducto = {'El viento conoce mi nommbre'}
      imagenProducto = {Isbn9789500769013}
      detalleProducto = {'En El viento conoce mi nombre pasado y presente se entrelazan para relatar el drama del desarraigo y la redención de la solidaridad, la compasión y el amor. Una novela actual sobre los sacrificios que a veces los padres deben hacer por sus hijos, sobre la sorprendente capacidad de algunos niños para sobrevivir a la violencia sin dejar de soñar, y sobre la tenacidad de la esperanza, que puede brillar incluso en los momentos más oscuros.'}
      />
    </div>
    </div>
  );
}

export default App;
