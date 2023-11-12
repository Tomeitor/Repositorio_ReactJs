import { Link, useNavigate, useParams } from "react-router-dom";
import dataAll from "../json/dataAll.json";
import { useEffect, useState } from "react";
import { app } from "../fireBaseconfig";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Detalle from "./Detail";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const [notFound, setNotFound] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    const docRef = doc(productosCollection, params.id);
    const consulta = getDoc(docRef);

    consulta
      .then((resultado) => {
        const producto = resultado.data();
        producto.id = resultado.id;
        setProducto(producto);
        setNotFound(false);
      })
      .catch((err) => {
        console.log("error al cargar el producto");
      })
      .finally(() => {
        setLoading(false);
      });
    /* setTimeout(() => {
      setLoading(false);

      dataAll.forEach((producto) => {
        if (producto.id === parseInt(params.id)) {
          setNotFound(false);
          setProducto(producto);
        }
      });
    }, 1000); */
  }, []);

  useEffect(() => {
    if (notFound && !loading) {
      navigate("/404");
    }
  }, [notFound, loading]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Detalle producto={producto} />
    </>
  );
}
export default ItemDetailContainer;
