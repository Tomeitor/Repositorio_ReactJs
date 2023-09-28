const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemListContainer">
      <p>Mensaje personalizado</p>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
