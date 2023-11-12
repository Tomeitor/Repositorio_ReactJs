import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { contexto } from "./providers/provider";
import { calcularCantidadTotal } from "./utils/util";

const MensajePersonalizado = ({ greeting }) => {
  const location = useLocation();
  const [mensaje, setMensaje] = useState("");
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const valorContexto = useContext(contexto);

  useEffect(() => {
    setCantidadProductos(calcularCantidadTotal(valorContexto.carrito));

    // Actualiza el mensaje basándote en la cantidad de productos
    if (cantidadProductos > 0) {
      setMensaje(
        `Tienes ${cantidadProductos} productos en el carrito. Recuerda que aceptamos tarjetas de debito, credito y contas con 3 cuotas sin interes con cualquier banco. ¡Sumate a la moda, sumate a Suspicions!`
      );
    } else {
      setMensaje(
        "¡Bienvenido a Suspicions! Tu tienda con la ropa del momento y la mejor calidad. Descubre las últimas tendencias y estilos exclusivos. ¡Sumate a la moda, sumate a Suspicions!"
      );
    }
  }, [valorContexto.carrito, cantidadProductos]);

  return (
    <div className="itemListContainer contenedor">
      <p className="mensajeAnimado">{mensaje}</p>
      {/* <p>{greeting}</p> */}
    </div>
  );
};

export default MensajePersonalizado;
