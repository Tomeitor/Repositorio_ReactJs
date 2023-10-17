import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
/* import json from "../json/dataBuzos.json"; */
import dataBuzos from "../json/dataBuzos.json";
import dataRemeras from "../json/dataRemeras.json";

import Detalle from "./Detalle";

console.log("hola");

/* ----------------------------------------------------------------------------------------------------------- */

const Main = () => {
  const nombre = "Tomas";
  const edad = 18;

  /* --------------------- */

  const tienda = (a) => {
    /* - */
    const [productos, setProductos] = useState([]);

    const pedirProductos = (i) => {
      return new Promise((resolve, reject) => {
        resolve(i);
      });
    };

    useEffect(() => {
      pedirProductos(a).then((res) => {
        setProductos(res);
      });
    }, []);
    /* - */
    return (
      <div>
        {productos.length > 0 &&
          productos.map((producto) => {
            return (
              <div key={producto.id}>
                <img src={producto.foto} alt={productos[0].nombre} />
                <h4> {producto.nombre} </h4>
                <p> {producto.precio} </p>
                <button onClick={() => navigate(`/detalle/${producto.id}`)}>
                  Detalle
                </button>
              </div>
            );
          })}
      </div>
    );
  };

  const navigate = useNavigate();
  /* --------------------- */

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<p></p>} />
        <Route path="/remeras" element={tienda(dataRemeras)} />
        <Route path="/buzos" element={tienda(dataBuzos)} />
        <Route path="/pantalones" element={<p></p>} />
        <Route path="/contacto" element={<p></p>} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
      <h2>home</h2>
      <p>Bienvenido {nombre} </p>
      <p>tenes {edad} años </p>
    </main>
  );
};

export default Main;
