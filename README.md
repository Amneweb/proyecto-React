# Mi primer e-commerce con React App

Este proyecto consiste en el e-commerce de una librería.
La intención del proyecto es mostrar el layout de un sitio web lo más parecido a los sitios web reales:

1. La página inicial no contiene el muestrario de todos los productos, sino que tiene un carousel de imágenes, un display de novedades donde se muestran los diferentes libros nuevos, cada con el enlace a su detalle; un "menú de categorías" con imágenes, un sector de "autor del mes" y un muestrario de las sagas o colecciones de libros destacadas.
1. El menú superior permite la navegabilidad por diferentes criterios: género, autor, idioma
1. Hay una barra de búsqueda que permanece en todo el sitio, al igual que el menú superior

## Librerías

El proyecto se hizo utilizando el framework de bootstrap, modificado con estilos propios

## Componentes

### Componentes básicos

Se encuentran presentes los componentes solicitados en la consigna del trabajo, que son:

1. ItemListContainer
1. ItemList
1. BookCard (que es el componente que muestra al producto en el catálogo)
1. ItemDetailContainer
1. CartWidget
1. Carrito, que contiene:
   - ItemCarrito (donde se muestra cada uno de los productos con su cantidad y precio unitario y total)
   - CarritoVacio (que aparece cuando no se ha cargado nada en el carrito)
1. BookDetail (equivalente a _ItemDetail_), que a su vez contiene a los
   - Botones (equivalente a _ItemQuantitySelector_), que incluyen al botón de compra

### Componentes extra

A su vez, hay otros componentes no requeridos en la consigna:

1. Carousel, que contiene al carousel de imágenes en página de inicio
1. NovedadesEnIndex, que es un carousel que muestra los libros nuevos en la página de inicio
1. SagasEnIndex, que muestra la información de las sagas destacadas y a su vez contiene un carousel con los libros que componen cada saga
1. SearchBar, input en menú superior para buscar libros.
1. Búsqueda, equivalente a ItemListContainer pero para contener los libros que cumplen con el término de búsqueda
1. ContenedorSagas, equivalente a ItemListContainer, pero para mostrar la saga elegida
1. Novedades, equivalente a ItemListContainer pero para mostrar las novedades
1. ContenedorAutor, que a su vez tiene dos componentes, uno que muestra los libros del autor seleccionado y un aside que puede mostrar la biografía del autor seleccionado, o un menú lateral para filtrar los libros por autor, según si en el menú superior se eligió un autor o TODOS

## Imágenes

Están guardadas localmente y se accede a ellas de dos maneras:

1. A las imágenes de autores y productos se accede a través de un archivo js que importa las imágenes y genera las variables de ruta (imagenes.js e imagenesAutores.js)
1. A las imágenes del carousel se accede con la ruta directa y están ubicadas en una subcarpeta de public

## Funciones

Todas las funciones de acceso a firebase y de ayuda al funcionamiento de la app se encuentran en la carpeta helpers

## Páginas

La página inicial de la app es Home, que tiene los componentes
<Carousel />
<NovedadesEnIndex />
<SagasEnIndex />
<CategoryShow />
<AutorEnIndex />

## Firebase

Hay 6 colecciones:

1. Libros
1. Autores
1. Categorías
1. Carousel (para las imágenes, textos y enlaces del carousel en la página de inicio)
1. Sagas
1. Órdenes
