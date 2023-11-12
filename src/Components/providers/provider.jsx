import { createContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

const ContextProvider = (props) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleIncrementTotal = (nuevaCant) => {
    setCantidadTotal(cantidadTotal + nuevaCant);
  };

  /* const handleAddProduct = (product, cant) => {
    //1 verificar la long del carrito
    //2 si no tiene nada, le agrego al final
    //3 si tiene algo, lo recorro hasta encontrar el producto y le sumo la cantidad
    //const copia = ?
    //se pueden copiar arrays con .map / .slice / ...etc
    //copia.push() - copia.pop() - copia.shift() - copia.unshift() - copia.splice()
    //setCarrito(copia)
  }; */

  const handleAddProduct = (product, cant) => {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.id === product.id);

    if (productoExistente) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      setCarrito((prevCarrito) =>
        prevCarrito.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cant }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agregarlo con la cantidad
      setCarrito((prevCarrito) => [
        ...prevCarrito,
        { ...product, cantidad: cant },
      ]);
    }
  };

  const handleVaciarCarrito = () => {
    // Vaciar el carrito
    setCarrito([]);
    setCantidadTotal(0);
  };

  const handleToggleDark = () => {
    setDarkMode(!darkMode); // Cambiar el estado del modo oscuro
  };

  /*   const valorContexto = {
    dark: darkMode,
    toggleDark: handleToggleDark,
    cantidadTotal: cantidadTotal,
    incrementTotal: handleIncrementTotal,
  }; */

  const valorContexto = {
    carrito: carrito, // Agrega la propiedad carrito al contexto
    dark: darkMode,
    toggleDark: handleToggleDark,
    cantidadTotal: cantidadTotal,
    incrementTotal: handleIncrementTotal,
    handleAddProduct: handleAddProduct,
    handleVaciarCarrito: handleVaciarCarrito,
  };

  return <Provider value={valorContexto}>{props.children}</Provider>;
};

export default ContextProvider;
