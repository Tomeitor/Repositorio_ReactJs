const MensajePersonalizado = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <p>Mensaje personalizado</p>
      <p>{greeting}</p>
    </div>
  );
};

export default MensajePersonalizado;
