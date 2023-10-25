import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dataBuzos from "../json/dataBuzos.json";
import dataRemeras from "../json/dataRemeras.json";
import dataAll from "../json/dataAll";

const Detalle = () => {
  /*  const params = useParams();
  console.log(params);

  return;
  <div>
    <p>Test pagina detalle</p>
  </div>; */
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const [notFound, setNotFound] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log("Cargando producto...");
    setTimeout(() => {
      setLoading(false);
      console.log("Producto cargado");
      dataAll.forEach((producto) => {
        if (producto.id === parseInt(params.id)) {
          setNotFound(false);
          setProducto(producto);
        }
      });
    }, 2000);
  }, []);

  useEffect(() => {
    if (notFound && !loading) {
      navigate("/404");
    }
  }, [notFound, loading]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  /* if(notFound) {
      return <p>Producto no encontrado</p>
  } */

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.foto} alt={producto.nombre} />

      <p> {producto.precio} </p>
    </div>
  );
};

export default Detalle;
