# Mi primer e-commerce con React

Este proyecto consiste en el e-commerce de una librería.
La intención del proyecto es mostrar el layout de un sitio web lo más parecido a los sitios web reales. Para eso:

- La página inicial no contiene el muestrario de todos los productos, sino que tiene un carousel de imágenes, un display de novedades, un "menú de categorías" con imágenes, un sector de "autor del mes" y un muestrario de las sagas o colecciones de libros destacadas.
- El menú superior permite la navegabilidad según diferentes criterios: género, autor, idioma, sagas
- En la parte superior de la página hay una barra de búsqueda que busca por nombre, autor y descripción. (No es case sensitive, pero aun me falta programar para que obvie las tildes -por ejemplo, si escribimos Garcia no trae ningún resultado, en cambio si escribimos García sí nos trae el libro de García Márquez-) La función que ejecuta esta búsqueda no es en firebase directamente porque firebase no permite realizar búsquedas de manera simple, por lo que la búsqueda se hace localmente, una vez que recuperamos el array de libros completos.
- Se permite agregar productos al carrito directamente desde el catálogo, no hace falta ir al detalle del producto. El botón 'comprar' en el catálogo permite agregar un elemento por vez. (acá me faltó programar un modal o tooltip para que el usuario sepa que se agregó el producto. La única manera de verificar que el producto se agregó al carrito es yendo al carrito ubicado en la esquina superior derecha.) En el detalle del producto la compra funciona diferente ya que se puede agregar la cantidad que el cliente quiera, y aparece un popover que le confirma al usuario que se agregó el producto.

Se puede ver el sitio funcionando en esta url 👉
[https://amneweb.com.ar/mw-libros/](https://amneweb.com.ar/mw-libros/) (\*\*)

O en Github pages: [https://amneweb.github.io/proyecto-React/](https://amneweb.github.io/proyecto-React/)

Al final del readme también se puede ver un video de un posible recorrido del usuario.

_(\*\*) NOTAS SOBRE FUNCIONAMIENTO DE LAS APP ONLINE:_

1. _El deployment al servidor funciona bien cuando entro a las páginas desde el homepage. Cuando copio y pego la ruta en el navegador, me da error. Por ejemplo si voy a mi página de inicio (amneweb.com.ar/mw-libros/) y desde ahí voy a la página para ver los libros del autor con id=10 (o sea en el menú superior voy a Por autor y elijo Florencia Bonelli) funciona. Pero si yo pego la dirección https://amneweb.com.ar/mw-libros/autor/10 directamente en un navegador, no funciona._

**EL SITIO ES RESPONSIVE** 🥳🥳

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

_NOTA: sólo se escribieron las biografías de 4 autores (Verne, Orwells, Rowling y Larssen), por lo que si en el menú superior "Por autor" se elige un autor distinto a los cuatro mencionados, al renderizarse el componente el sector lateral donde se debería mostrar la biografía aparecerá vacío._

## Funciones

Todas las funciones de acceso a firebase y de ayuda al funcionamiento de la app se encuentran en la carpeta helpers

## Custom Hooks

Armé dos hooks para la traida de datos de firebase. Un hook trae la respectiva colección completa (x ejemplo todos los libros, o todos los autores) y el otro la colección filtrada según los datos que se le pasen a la función. Estos hooks son llamados desde la mayoría de los componentes, a excepción del itemlistcontainer (este componente tiene varios condicionales que dependen del parámetro url y no tuve tiempo de ir probando cada uno, pero también se podrían usar ambos hooks)
Hay un tercer hook que evalúa el ancho de la pantalla, para definir cuántos items muestro en el carousel de novedades en la homepage.

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
1. Un login para la persistencia de las órdenes **NOTA al 12/2/24: YA ESTA ARMADO Y FUNCIONANDO**
1. Productos con variantes (lo de las ediciones de bolsillo que aparece en el carousel de inicio tenía como objetivo hacer variantes pero no me iba a dar el tiempo si hacía toda la programación. Hay una propiedad variante en los objetos de los productos, pero no funciona como tal).
1. Además, me hubiera gustado que al vaciarse el carrito al final de la compra, se pudiera navegar automáticamente a la página de inicio, pero no lo logré. :(

## Video presentación

Click en la imagen para ver en Youtube

[![MI PRIMER E-COMMERCE CON REACT](https://img.youtube.com/vi/wTy66sJDB-U/0.jpg)](https://www.youtube.com/watch?v=wTy66sJDB-U)
