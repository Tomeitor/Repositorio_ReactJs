/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; */

import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";

const App = () => {
  const nombre = "Tomas";
  const edad = 18;

  return (
    <>
      <Header />

      <Main />

      <footer>
        <p>copyright 2023 - Tomas Carnezis</p>
      </footer>
    </>
  );
};

export default App;

/* --------------------------------------------------------------------- */
