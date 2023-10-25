import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = (props) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<p>Carrito</p>} />

        <Route path="*" element={<p>404 vuelva a intentar por favor</p>} />
      </Routes>

      {/* <ItemListContainer/> */}
    </main>
  );
};

export default Main;
