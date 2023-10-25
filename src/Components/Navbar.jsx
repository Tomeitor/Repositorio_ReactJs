import { Link, NavLink } from "react-router-dom";
import Cartwidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="divBuscador">
        <input className="navBuscador" type="text" />
      </div>
      <div className="navbar">
        {/* <NavLink className="liNav" to="/">
          Inicio
        </NavLink>
        <NavLink className="liNav" to="/remeras">
          Remeras
        </NavLink>
        <NavLink className="liNav" to="/buzos">
          Buzos
        </NavLink>
        <NavLink className="liNav" to="/pantalones">
          Pantalones
        </NavLink>
        <NavLink className="liNav" to="/contacto">
          Contacto
        </NavLink> */}
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
