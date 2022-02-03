function Form() {

    function cadastraUsuario(e) {
        e.preventDefault()
        console.log("cadastrou")
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastraUsuario}>
            <div>
                <input type="text" placeholder="Digite seu nome" />
            </div>
            <div>
            <input type="submit" value="Cadastrar" />
             </div>
            </form>
        </div>
    
    )
}
export default Form