function Pessoa ({nome, idade, profissao, altura, foto}) {
    return <div>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>ALtura: {altura}</p>
        <p>Profissão: {profissao}</p>

    </div>
}

export default Pessoa