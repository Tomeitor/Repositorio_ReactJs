import Cartwidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="divBuscador">
        <input className="navBuscador" type="text" />
      </div>
      <div className="navbar">
        <ul className="ulNav">
          <li className="liNav">
            <a href="#">Inicio</a>
          </li>
          <li className="liNav">
            <a href="#">Remeras</a>
          </li>
          <li className="liNav">
            <a href="#">Buzos</a>
          </li>
          <li className="liNav">
            <a href="#">Pantalones</a>
          </li>
          <li className="liNav">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="carritoUsuario">
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
