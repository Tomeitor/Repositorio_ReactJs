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
          <h1 className="card_title">{props.producto.nombre}</h1>
          <img
            className="card_image"
            src={props.producto.foto}
            alt={props.producto.nombre}
          />
          <br></br>
          <strong>
            <h2>Precio: ${props.producto.precio}</h2>
          </strong>
          <Link to={`/category/${props.producto.categoria}`}>
            <h3>Categoria: {props.producto.categoria}</h3>
          </Link>
          <Link to="/carrito" className="btn" onClick={handleClick}>
            Añadir al carrito
          </Link>
          <div className="btnVolver">
            <Link to={`/`}>
              <button className="btn2"> volver</button>
            </Link>
          </div>
        </article>
      </div>
    );
  } else {
    return (
      <div>
        <article className="card">
          <h1 className="card_title">{props.producto.nombre}</h1>
          <img
            className="card_image"
            src={props.producto.foto}
            alt={props.producto.nombre}
          />
          <br></br>
          <strong>
            <h2>Precio: ${props.producto.precio}</h2>
          </strong>
          <Link to={`/category/${props.producto.categoria}`}>
            <h3>Categoria: {props.producto.categoria}</h3>
          </Link>

          <Contador stock={props.producto.stock} initial={1} onAdd={handle} />
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
