/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; */

import { useState } from "react";
import Header from "./Components/Header.jsx";

import Footer from "./Components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main.jsx";
import ContextProvider from "./Components/providers/provider.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Header />
        <Main />
        <Footer />
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;

/* --------------------------------------------------------------------- */
