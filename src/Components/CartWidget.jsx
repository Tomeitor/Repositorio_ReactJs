import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import React, { useContext } from "react";
import { contexto } from "./providers/provider";
import { calcularCantidadTotal } from "./utils/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cartwidget = () => {
  const valorContexto = useContext(contexto);

  const cantidadTotalProductos = calcularCantidadTotal(valorContexto.carrito);

  return (
    <div>
      <NavLink className="cartIcon" to="/carrito">
        {/*  🛒 */}
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
      {/*  <p>Carrito: {valorContexto.carrito.length} </p> */}
      <Link to="/carrito">
        <p>Carrito: {cantidadTotalProductos} </p>
      </Link>
    </div>
  );
};

export default Cartwidget;
