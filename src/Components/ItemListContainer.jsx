import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
/* import json from "../json/dataBuzos.json"; */

import dataAll from "../json/dataAll.json";

import Detail from "./Detail";
import CardProduct from "./CardProduct";
import { app } from "../fireBaseconfig";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
/* fin imports */
/* const db = getFirestore(app);
const productosCollection = collection(db, "productos");


const consulta = getDocs(productosCollection);

consulta
  .then((resultado) => {
    
    const products = resultado.docs.map((doc) => {
      const id = doc.id;
      const data = doc.data();
      data.id = id;
      return data;
    });
    console.log(products);
  })
  .catch((err) => {
    console.log({ err });
  }); */

console.log("hola");

/* const db = getFirestore(app);
const productosCollection = collection(db, "productos"); */

/* // Función para añadir un producto a la base de datos
const addProductToFirestore = async (producto) => {
  try {
    // Añade el producto a la colección
    const docRef = await addDoc(productosCollection, producto);
    console.log(`Producto añadido con ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error al añadir el producto:", error);
  }
};

// Recorre el array de productos y añádelos a Firestore
dataAll.forEach((producto) => {
  addProductToFirestore(producto);
}); */

/* const eliminarDuplicados = async () => {
  const snapshot = await getDocs(productosCollection);
  const productos = [];

  // Obtener productos y eliminar duplicados
  snapshot.forEach((doc) => {
    const data = doc.data();
    const encontrado = productos.find((p) => p.nombre === data.nombre);

    if (!encontrado) {
      productos.push(data);
    } else {
      // Eliminar duplicado
      deleteDoc(doc.ref);
    }
  });
};

eliminarDuplicados(); */
/* ----------------------------------------------------------------------------------------------------------- */

/* const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const category = useParams().id;
  console.log(category);

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    const consulta = getDocs(productosCollection);
    consulta.then((res) => {
      const products = res.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        data.id = id;
        return data;
      });

      if (category) {
        setProductos(products.filter((prod) => prod.categoria === category));
      } else {
        setProductos(products);
      }
    });
  }, [category]);

  return (
    <>
      <CardProduct productos={productos} />
    </>
  );
};

export default ItemListContainer; */

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const category = useParams().id;

  useEffect(() => {
    const db = getFirestore(app);
    const productosCollection = collection(db, "productos");

    // Crea una consulta base
    let consulta = query(productosCollection);

    // Agrega la condición de categoría si existe
    if (category) {
      consulta = query(productosCollection, where("categoria", "==", category));
    }

    // Agrega más condiciones según sea necesario
    // consulta = query(consulta, where("precio", ">", 13));

    // Ejecuta la consulta
    getDocs(consulta)
      .then((resultado) => {
        const products = resultado.docs.map((doc) => {
          const id = doc.id;
          const data = doc.data();
          data.id = id;
          return data;
        });

        setProductos(products);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error al cargar los datos");
      });
  }, [category]);

  return (
    <>
      <CardProduct productos={productos} />
    </>
  );
};

export default ItemListContainer;
