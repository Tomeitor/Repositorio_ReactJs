export const calcularCantidadTotal = (carrito) => {
  return carrito.reduce((total, producto) => total + producto.cantidad, 0);
};
