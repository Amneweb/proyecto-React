import LibroCard  from '../BookCard/BookCard';
const ItemList = ({libros}) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            
                {libros.map((cadalibro)=><LibroCard libro={cadalibro} key={cadalibro.id} /> )}
                </div>
    )
}
export default ItemList