import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./providers/provider";
import Contador from "./Contador";

function Detalle(props) {
  const valorContexto = useContext(contexto);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  /* const navigate = useNavigate() */

  const handle = (cantidadRec) => {
    setCantidadSeleccionada(cantidadRec);
  };

  const handleClick = () => {
    valorContexto.incrementTotal(cantidadSeleccionada);
    valorContexto.handleAddProduct(props.producto, cantidadSeleccionada);
    /* navigate("/carrito") */
  };

  if (cantidadSeleccionada > 0) {
    return (
      <div>
        <article className="card">
          <div className="detailContainer">
            <div>
              <img
                className="card_image"
                src={props.producto.foto}
                alt={props.producto.nombre}
              />
            </div>
            <div>
              <h1 className="card_title">{props.producto.nombre}</h1>
              <hr />
              <br></br>
              <strong>
                <h2 className="card_precio">
                  Precio: ${props.producto.precio}
                </h2>
              </strong>
              <hr />
              <p className="card_descripcion">
                {" "}
                Descripción: {props.producto.descripcion}.
              </p>

              <Link
                className="card_categoria"
                to={`/category/${props.producto.categoria}`}
              >
                <h3>Categoria: {props.producto.categoria}</h3>
              </Link>
              <Link
                to="/carrito"
                className="btn btn-dark btnAddToCart"
                onClick={handleClick}
              >
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div>
            <div className="btnVolver">
              <Link to={`/`}>
                <button className="btn2"> volver</button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <div>
        <article className="card">
          <div className="detailContainer">
            <div>
              <img
                className="card_image"
                src={props.producto.foto}
                alt={props.producto.nombre}
              />
            </div>
            <div>
              <h1 className="card_title">{props.producto.nombre}</h1>
              <hr />
              <br></br>
              <strong>
                <h2 className="card_precio">
                  Precio: ${props.producto.precio}
                </h2>
              </strong>
              <hr />
              <p className="card_descripcion">
                Descripción: {props.producto.descripcion}.
              </p>
              <Link
                className="card_categoria"
                to={`/category/${props.producto.categoria}`}
              >
                <h3>Categoria: {props.producto.categoria}</h3>
              </Link>

              <Contador
                stock={props.producto.stock}
                initial={1}
                onAdd={handle}
              />
            </div>
          </div>
          <div className="btnVolver">
            <Link to={`/`}>
              <button className="btn2"> volver</button>
            </Link>
          </div>
        </article>
      </div>
    );
  }
}

export default Detalle;
