import Button from "./Button"

function Evento() {

    function meuEvento(){
        console.log("Opa, fui ativado")
    }

    return(
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
        </div>
    )
}

export default Evento 