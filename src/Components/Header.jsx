import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";

const Header = () => {
  const mensajeGreeting =
    "¡Hace tiempo no nos visitabas, bienvenido nuevamente!";

  return (
    <header className="header">
      <h1 className="titulo">Suspicions</h1>

      <Navbar />
      <ItemListContainer greeting={mensajeGreeting} />
    </header>
  );
};

export default Header;
