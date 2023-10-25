/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; */

import { useState } from "react";
import Header from "./Components/Header.jsx";

import Footer from "./Components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

/* --------------------------------------------------------------------- */
