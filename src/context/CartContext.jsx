import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const carritoEnStorage = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoEnStorage);

  const alCarrito = (item, contador) => {
    const libroAgregado = { ...item, contador };

    const nuevoCarrito = [...carrito];
    const consultaRepetido = nuevoCarrito.find(
      (libro) => libro.id === libroAgregado.id
    );
    if (consultaRepetido) {
      if (consultaRepetido.contador + contador <= consultaRepetido.stock) {
        consultaRepetido.contador += contador;
      }
    } else {
      nuevoCarrito.push(libroAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const totalProductosEnCarrito = () => {
    return carrito.reduce(
      (acumulador, elemento) => acumulador + elemento.contador,
      0
    );
  };
  const totalApagar = () => {
    return carrito.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.contador * elemento.precio,
      0
    );
  };
  const removerElemento = (item) => {
    const posicion = carrito.indexOf(item);
    const carritoSinElemento = carrito.toSpliced(posicion, 1);
    setCarrito(carritoSinElemento);
  };

  const modificarCantidad = (item, nuevaCantidad) => {
    const posicion = carrito.indexOf(item);
    const carritoNuevo = carrito.map((elemento, key) => {
      if (key === posicion) {
        return { ...elemento, contador: nuevaCantidad };
      }
      return elemento;
    });
    setCarrito(carritoNuevo);
  };
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        alCarrito,
        totalProductosEnCarrito,
        vaciarCarrito,
        removerElemento,
        totalApagar,
        modificarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
