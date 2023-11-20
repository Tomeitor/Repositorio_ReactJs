import { Link, Navigate, useParams } from "react-router-dom";
import dataAll from "../json/dataAll.json";
import PaymentCard from "./PaymentCard";

const CardProduct = ({ productos }) => {
  const params = useParams();
  const subtitulo =
    params.id === undefined || params.id === "/" ? "Productos" : params.id;
  return (
    /*  <>
      <section className="card-container">
        <h2 className=" tienda_subtitulo shadow-drop-center animate__animated animate__pulse container">
          {subtitulo}
        </h2>

        <article className="container tiendaArticulos">
          {productos.length > 0 &&
            productos.map((producto) => {
              return (
                <Link to={`/detalle/${producto.id}`}>
                  <div className="tiendaContainer">
                    <img
                      src={producto.foto}
                      alt={producto.nombre}
                      className="tiendaImg"
                    />

                    <h4 className="tiendaTitulo"> {producto.nombre} </h4>
                    <p className="tiendaPrecio"> ${producto.precio} </p>
                    <Link to={`/detalle/${producto.id}`}>
                      <p className="tiendaBoton">Detalle</p>
                    </Link>
                  </div>
                </Link>
              );
            })}
        </article>
      </section>
      <PaymentCard />
    </>
  );
}; */

    <>
      <section className="card-container">
        <h2 className="tienda_subtitulo shadow-drop-center animate__animated animate__pulse container">
          {subtitulo.toLocaleUpperCase()}
        </h2>
        <article className="container tiendaArticulos">
          {productos.length > 0 &&
            productos.map((producto) => (
              <div key={producto.id} className="tiendaContainer">
                <Link to={`/detalle/${producto.id}`}>
                  <img
                    src={producto.foto}
                    alt={producto.nombre}
                    className="tiendaImg"
                  />
                  <h4 className="tiendaTitulo"> {producto.nombre} </h4>
                  <p className="tiendaPrecio"> ${producto.precio} </p>
                  <p className="tiendaBoton">Detalle</p>
                </Link>
              </div>
            ))}
        </article>
      </section>
      <PaymentCard />
    </>
  );
};
export default CardProduct;
