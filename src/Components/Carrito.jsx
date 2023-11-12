import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { app } from "../fireBaseconfig";
import { contexto } from "./providers/provider";

const Carrito = () => {
  // const valorContexto = useContext(contexto);

  // const handleClick = () => {
  //   valorContexto.toggleDark();
  // };

  // const handleFinalizarCompra = () => {
  //   //tendria que ya tener a mano lo siguiente :
  //   //el array de productos "carrito" que este guardado en el contexto
  //   //info de un usuario
  //   //fecha de compra
  //   const compra = {
  //     carrito: [{ id: "1", cantidad: 1, precio: 1000 }],
  //     usuario: {},
  //     created_at: serverTimestamp(),
  //     //created_at: new Date()
  //   };

  //   const db = getFirestore(app);
  //   //En este caso el nombre de la coleccion no existe, lo invente yo y se va a crear cuando se le inserte el primer documento
  //   const comprasCollection = collection(db, "compras");

  //   const consulta = addDoc(comprasCollection, compra);

  //   consulta
  //     .then((resultado) => {
  //       console.log(resultado.id);
  //       //id = resultado.id
  //       console.log("Compra guardada con exito!");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("Ocurrio un error al guardar la compra");
  //     });
  // };

  // return (
  //   <div>
  //     <h2 className="font-bold text-2xl mb-8">Carrito</h2>
  //     {/* <button onClick={handleClick}>toggle dark</button>
  //           <p>Dark mode: {JSON.stringify(valorDelContexto)}</p> */}
  //     <button onClick={handleFinalizarCompra} className="btn">
  //       finalizar compra
  //     </button>
  //   </div>
  // );

  const valorContexto = useContext(contexto);

  /* const handleClick = () => {
    valorContexto.toggleDark();
  }; */

  const handleFinalizarCompra = () => {
    // Obtener el array de productos del contexto
    const productosEnCarrito = valorContexto.carrito;

    // Crear un objeto de compra con los productos y otra información necesaria
    const compra = {
      carrito: productosEnCarrito,
      usuario: {}, // Puedes agregar la información del usuario aquí
      created_at: serverTimestamp(),
    };

    const db = getFirestore(app);
    const comprasCollection = collection(db, "compras");

    const consulta = addDoc(comprasCollection, compra);

    consulta
      .then((resultado) => {
        console.log(resultado.id);
        console.log("Compra guardada con éxito!");
        valorContexto.handleVaciarCarrito();
      })
      .catch((err) => {
        console.log(err);
        console.log("Ocurrió un error al guardar la compra");
      });
  };

  const valorTotal = valorContexto.carrito.reduce((total, producto) => {
    return total + producto.cantidad * producto.precio;
  }, 0);

  return (
    // <div>
    //   <h2 className="font-bold text-2xl mb-8">Carrito</h2>

    //   {/* Mostrar la lista de productos en el carrito */}
    //   <ul>
    //     {valorContexto.carrito.map((producto) => (
    //       <li key={producto.id}>
    //         <p>Producto: {producto.nombre}</p>
    //         <img
    //           className="card__image"
    //           src={producto.foto}
    //           alt={producto.nombre}
    //         />
    //         <p>Cantidad: {producto.cantidad}</p>
    //         <p>Precio unitario: ${producto.precio}</p>
    //         <p>Valor por la cantidad: ${producto.precio * producto.cantidad}</p>
    //       </li>
    //     ))}
    //   </ul>

    //   <button onClick={handleFinalizarCompra} className="btn">
    //     Finalizar compra
    //   </button>
    // </div>

    <div>
      <h2 className="font-bold text-2xl mb-8">Carrito</h2>
      {valorContexto.carrito.length === 0 ? (
        <>
          <p>El carrito está vacío</p>
          <Link to="/">Volver</Link>
        </>
      ) : (
        <>
          {/* Mostrar la lista de productos en el carrito */}
          <ul>
            {valorContexto.carrito &&
              valorContexto.carrito.map((producto) => (
                <li key={producto.id}>
                  <p>Producto: {producto.nombre}</p>
                  <img
                    className="card__image"
                    src={producto.foto}
                    alt={producto.nombre}
                  />
                  <p>Cantidad: {producto.cantidad}</p>
                  <p>Precio: ${producto.precio * producto.cantidad}</p>
                </li>
              ))}
          </ul>

          {/* Mostrar el valor total de todos los productos */}
          <p>Valor Total: ${valorTotal}</p>

          {/* Botón para finalizar la compra */}
          <button onClick={handleFinalizarCompra} className="btn">
            Finalizar compra
          </button>

          {/* Botón para vaciar el carrito */}
          <button onClick={valorContexto.handleVaciarCarrito} className="btn">
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};
export default Carrito;
