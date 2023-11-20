import Navbar from "./Navbar";
import MensajePersonalizado from "./MensajePersonalizado";
import { useEffect, useState } from "react";

const Header = () => {
  const mensajeGreeting =
    "¡Hace tiempo no nos visitabas, bienvenido nuevamente!";

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Modificar el tamaño del título basado en el desplazamiento
      if (offset > 0) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h1 className={`titulo ${isSmall ? "small" : ""}`}>Suspicions</h1>
      <Navbar />
      <MensajePersonalizado greeting={mensajeGreeting} />
    </header>
  );
};

export default Header;
