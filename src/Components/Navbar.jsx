import { Link, NavLink } from "react-router-dom";
import Cartwidget from "./CartWidget";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="nav1">
      {/* <div className="divBuscador">
        <input className="navBuscador" type="text" />
      </div> */}

      <form className="search" id="formbuscar" action="">
        <input
          className="input_search"
          type="search"
          placeholder="Buscar..."
          required
        />
        <button className="button_search" type="submit">
          Search
        </button>
      </form>

      <div className="navbar1">
        <NavLink className="liNav" to="/">
          Inicio
        </NavLink>
        <NavLink className="liNav" to="/category/remeras">
          Remeras
        </NavLink>
        <NavLink className="liNav" to="/category/buzos">
          Buzos
        </NavLink>
        <NavLink className="liNav" to="/category/pantalones">
          Pantalones
        </NavLink>
        <NavLink className="liNav" to="/contacto">
          Contacto
        </NavLink>
      </div>
      <div className="carritoUsuario">
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
