function Lista2({ itens }) {
  return (
    <>
      <h3>lista de coisas:</h3>
      {
      itens.length > 0 ? (
      itens.map((item, index) => (
        <p key={index}>{item}</p>
      ))) : (<p>
          Não há itens aqui
      </p>)}
    </>
  );
}

export default Lista2;
