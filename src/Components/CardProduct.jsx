import { Link, Navigate } from "react-router-dom";
import dataAll from "../json/dataAll.json";

const CardProduct = ({ productos }) => {
  return (
    <section className="card-container">
      {productos.length > 0 &&
        productos.map((producto) => {
          return (
            <article className="tiendaArticulos" key={producto.id}>
              <div className="tiendaContainer">
                <img
                  src={producto.foto}
                  alt={producto.nombre}
                  className="tiendaImg"
                />
                <h4 className="tiendaTitulo"> {producto.nombre} </h4>
                <p className="tiendaPrecio"> {producto.precio} </p>
                <Link to={`/detalle/${producto.id}`}>
                  <button className="tiendaBoton">Detalle</button>
                </Link>
              </div>
            </article>
          );
        })}
    </section>
  );
};
export default CardProduct;
