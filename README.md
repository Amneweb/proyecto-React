# Mi primer e-commerce con React

Este proyecto consiste en el e-commerce de una librería.
La intención del proyecto es mostrar el layout de un sitio web lo más parecido a los sitios web reales. Para eso:

1. La página inicial no contiene el muestrario de todos los productos, sino que tiene un carousel de imágenes, un display de novedades, un "menú de categorías" con imágenes, un sector de "autor del mes" y un muestrario de las sagas o colecciones de libros destacadas.
1. El menú superior permite la navegabilidad según diferentes criterios: género, autor, idioma, sagas
1. En la parte superior de la página hay una barra de búsqueda que busca en el nombre del libro, autor y descripción. Esta búsqueda se realiza del lado del cliente dado que firebase no permite realizar búsquedas de manera simple (hay que instalar Algolia, que es un servicio pago)

Se puede ver el sitio funcionando en esta url 👇

[https://amneweb.com.ar/](https://amneweb.com.ar/)

Al final del readme también se puede ver un video de un posible recorrido del usuario.

## Librerías

El proyecto se hizo utilizando el framework de bootstrap, modificado con estilos propios

## Componentes

### Componentes básicos

Se encuentran presentes los componentes solicitados en la consigna del trabajo, que son:

1. **ItemListContainer**
1. **ItemList**
1. **BookCard** (que es el componente que muestra al producto en el catálogo)
1. **ItemDetailContainer**
1. **CartWidget**
1. **Carrito**, que contiene:
   - **ItemCarrito** (donde se muestra cada uno de los productos con su cantidad y precio unitario y total)
   - **CarritoVacio** (que aparece cuando no se ha cargado nada en el carrito)
1. **BookDetail** (equivalente a _ItemDetail_), que a su vez contiene a los
   - **Botones** (equivalente a _ItemQuantitySelector_), que incluyen al botón de compra
1. **Checkout** (aparece como overlay sobre el carrito de compras)

### Componentes extra

A su vez, hay otros componentes no requeridos en la consigna:

1. **Carousel**, que contiene al carousel de imágenes en página de inicio
1. **NovedadesEnIndex**, que es un carousel que muestra los libros nuevos en la página de inicio
1. **SagasEnIndex**, que muestra la información de las sagas destacadas y a su vez contiene un carousel con los libros que componen cada saga
1. **SearchBar**, input en menú superior para buscar libros.
1. **Búsqueda**, equivalente a ItemListContainer pero para contener los libros que cumplen con el término de búsqueda
1. **ContenedorSagas**, equivalente a ItemListContainer, pero para mostrar la saga elegida
1. **Novedades**, equivalente a ItemListContainer pero para mostrar las novedades
1. **ContenedorAutor**, que a su vez tiene dos componentes, uno que muestra los libros del autor seleccionado y un aside que puede mostrar la biografía del autor seleccionado, o un menú lateral para filtrar los libros por autor, según si en el menú superior se eligió un autor o TODOS

- NOTA: sólo se escribieron las biografías de 4 autores (Verne, Orwells, Rowling y Larssen), por lo que si en el menú superior "Por autor" se elige un autor distinto a los cuatro mencionados, al renderizarse el componente el sector lateral donde se debería mostrar la biografía aparecerá vacío

## Imágenes

Están guardadas localmente y se accede a ellas de dos maneras:

1. A las imágenes de autores y productos se accede a través de un archivo js que importa las imágenes y genera las variables de ruta (imagenes.js e imagenesAutores.js)
1. A las imágenes del carousel se accede con la ruta directa y están ubicadas en una subcarpeta de public

## Funciones

Todas las funciones de acceso a firebase y de ayuda al funcionamiento de la app se encuentran en la carpeta helpers

## Custom Hooks

Armé dos hooks para la traida de datos de firebase. Un hook trae la respectiva colección completa (x ejemplo todos los libros, o todos los autores) y el otro la colección filtrada según los datos que se le pasen a la función. Estos hooks son llamados desde la mayoría de los componentes, a excepción del itemlistcontainer (este componente tiene varios condicionales que dependen del parámetro url y no tuve tiempo de ir probando cada uno, pero también se podrían usar ambos hooks)

## Páginas

La página inicial de la app es Home, que tiene los componentes

1. Carousel
1. NovedadesEnIndex
1. SagasEnIndex
1. CategoryShow
1. AutorEnIndex

## Firebase

Hay 6 colecciones:

1. Libros
1. Autores
1. Categorías
1. Carousel (para las imágenes, textos y enlaces del carousel en la página de inicio)
1. Sagas
1. Órdenes

## Navegación entre páginas

En muchos casos me pasaba que cuando una página estaba desplazada hasta abajo de todo (con el footer visible) y hacía click en algún enlace del footer o de la barra de navegacióno, por ejemplo, al catálogo filtrado por categoría, se renderizaba el componente contenedor, pero el cambio no se notaba y se seguía viendo el footer. Para evitar esto puse una función de scrollToTop dentro de la función del componente, pero no funciona en todos los casos. No sé cómo resolverlo.

## Pendientes

Me quedaron pendientes los extras sugeridos en la consigna del PF:

1. El wishlist
1. Un login para la persistencia de las órdenes
1. Productos con variantes (lo de las ediciones de bolsillo que aparece en el carousel de inicio tenía como objetivo hacer variantes pero no me iba a dar el tiempo si hacía toda la programación. Hay una propiedad variante en los objetos de los productos, pero no funciona como tal).
1. Además, me hubiera gustado que al vaciarse el carrito al final de la compra, se pudiera navegar automáticamente a la página de inicio, pero no lo logré. :(

## Video presentación

Click en la imagen para ver en Youtube

[![MI PRIMER E-COMMERCE CON REACT](https://img.youtube.com/vi/wTy66sJDB-U/0.jpg)](https://www.youtube.com/watch?v=wTy66sJDB-U)
