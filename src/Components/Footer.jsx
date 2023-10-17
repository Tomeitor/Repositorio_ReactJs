import { useState } from "react";

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

  const [backgroundColor, setBackgroundColor] = useState("darkslategray");

  const changeBackgroundColor = () => {
    // Cambiar el color de fondo del footer cuando se haga clic en el botón.
    const newColor =
      backgroundColor === "darkslategray" ? "cadetblue" : "darkslategray";
    setBackgroundColor(newColor);
  };

  return (
    <footer style={{ backgroundColor: backgroundColor }}>
      <p>Este es el footer de mi página.</p>
      <button onClick={changeBackgroundColor}>Cambiar Color</button>
    </footer>
  );
};

/* const Footer = () => {
  return (
    <footer>
      <p>copyright 2023 - Tomas Carnezis</p>
    </footer>
  );
};
 */
export default Footer;
