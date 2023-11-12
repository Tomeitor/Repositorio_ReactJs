import { useState } from "react";

/* function Contador(props) {
  const [contador, setContador] = useState(props.initial);

  const handleSumar = () => {
    setContador(contador + 1);
  };

  const handleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleResetear = () => {
    setContador(1);
  };

  const handleConfirmar = () => {
    props.onAdd(contador);
  };

  return (
    <div>
      <p>Contador Actual : {contador}</p>
      <button onClick={handleSumar} className="btn">
        +
      </button>
      <button onClick={handleRestar} className="btn">
        -
      </button>
      <button onClick={handleResetear} className="btn">
        reset
      </button>
      <button onClick={handleConfirmar} className="btn">
        confirmar cantidad
      </button>
    </div>
  );
} */

const Contador = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div className="product-counter">
      <button className="btn" onClick={decrementar}>
        -
      </button>
      <span>{cantidad}</span>
      <button className="btn" onClick={incrementar}>
        +
      </button>
      <button className="btn" onClick={handleAdd}>
        Confirmar
      </button>
    </div>
  );
};

export default Contador;
