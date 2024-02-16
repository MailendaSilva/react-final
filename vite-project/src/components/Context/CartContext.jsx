import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (storedCarrito.length > 0) {
      setCarrito(storedCarrito);
    }
  }, []);

  const agregarCarrito = (item, contador) => {
    const itemAgregado = { ...item, contador };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
      console.log("ya está en el carrito, así que suma");
      estaEnElCarrito.contador = estaEnElCarrito.contador + contador;
    } else {
      console.log("no está, lo agrega");
      nuevoCarrito.push(itemAgregado);
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.contador, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.contador, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito'); // Limpiar el localStorage al vaciar el carrito
  };

  return (
    <CartContext.Provider value={{ carrito, agregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};