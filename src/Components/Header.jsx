import Navbar from "./Navbar";
import MensajePersonalizado from "./MensajePersonalizado";

const Header = () => {
  const mensajeGreeting =
    "¡Hace tiempo no nos visitabas, bienvenido nuevamente!";

  return (
    <header className="header">
      <h1 className="titulo">Suspicions</h1>

      <Navbar />
      <MensajePersonalizado greeting={mensajeGreeting} />
    </header>
  );
};

export default Header;
