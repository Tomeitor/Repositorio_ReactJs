import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  /*   const [modoDark, setModoDark] = useState(true);

  if (modoDark) {
    return (
      <footer className="modoDarkOn">
        <p>copyright 2023 - Tomas Carnezis</p>
        <button onClick={modoDark == false} className="btn">
          Cambiar color
        </button>
      </footer>
    );
  } else {
    return (
      <footer className="modoDarkOff">
        <p>copyright 2023 - Tomas Carnezis</p>
        <button onClick={!modoDark} className="btn">
          Cambiar color
        </button>
      </footer>
    );
  } */

  const [backgroundColor, setBackgroundColor] = useState("#181619");

  const changeBackgroundColor = () => {
    // Cambiar el color de fondo del footer cuando se haga clic en el botón.
    const newColor = backgroundColor === "#181619" ? "grey" : "#181619";
    setBackgroundColor(newColor);
  };

  return (
    <footer
      className="footer-distributed"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="footer-left">
        <h3 className="sobre_suspicions1">
          Sobre:
          <span
            /* data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" */
            className="sobre_suspicions2"
          >
            Suspicions
          </span>
        </h3>

        <div className="footer-links">
          <Link to="/">
            <p className="footer-links2">Inicio</p>
          </Link>
          |
          <Link to="/category/remeras">
            <p className="footer-links2">Remeras</p>
          </Link>
          |
          <Link to="/category/buzos">
            <p className="footer-links2">Buzos</p>
          </Link>
          |
          <Link to="/category/pantalones">
            <p className="footer-links2">Pantalones</p>
          </Link>
          |
          <Link to="/contacto">
            <p className="footer-links2">Contacto</p>
          </Link>
          {/* <a href="#">Inicio</a>|<a href="pages/remeras.html">Remeras</a>|
          <a href="pages/buzos.html">Buzos</a>|
          <a href="pages/pantalones.html">Pantalones</a>|
          <a href="pages/contacto.html">Contacto</a> */}
        </div>

        <p className="footer-company-name">
          Copyright © 2023 Suspicions - Todos los derechos reservados
          <br />
          Creado por Tomas Carnezis
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker fa_color animate__animated animate__pulse"></i>
          <p>
            <span>Avenida Hipólito Yrigoyen al 12598 </span>
            Adrogue, Buenos Aires, Argentina
          </p>
        </div>

        <div>
          <i className="fa fa-phone fa_color animate__animated animate__pulse"></i>
          <p>+54 11 23456789</p>
        </div>
        <div>
          <i className="fa fa-envelope fa_color animate__animated animate__pulse"></i>
          <p>
            <a href="#">SuspicionsArg@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>Sobre nosotros</span>
          Somos una tienda de ropa que venimos a renovar la moda y vestirte con
          la mejor onda. Contamos con un local en Adrogue con los mejores
          precios y la mejor calidad para que tus prendas sean unicas.
        </p>
        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <button onClick={changeBackgroundColor}>Cambiar Color</button>
    </footer>
  );
};

export default Footer;
