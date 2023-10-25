import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
/* import json from "../json/dataBuzos.json"; */
import dataBuzos from "../json/dataBuzos.json";
import dataRemeras from "../json/dataRemeras.json";
import dataPantalones from "../json/dataPantalones.json";
import dataAll from "../json/dataAll.json";

import Detalle from "./Detalle";
import CardProduct from "./CardProduct";

console.log("hola");

/* ----------------------------------------------------------------------------------------------------------- */

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const category = useParams().id;
  console.log(category);

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      resolve(dataAll);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      if (category) {
        setProductos(res.filter((prod) => prod.categoria === category));
      } else {
        setProductos(res);
      }
    });
  }, [category]);

  return (
    <>
      <CardProduct productos={productos} />
    </>
  );
};

export default ItemListContainer;
