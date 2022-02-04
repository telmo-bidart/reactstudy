import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    
    function limparEmail(e) {
        setUserEmail('')
    }

return (
    <div>
        <h2>cadastre seu email
        </h2>
        <form>
            <input type="email" placeholder="digite seu email..." onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={enviarEmail}>Enviar</button>
            {userEmail && (
                <div>
                    <p>
                        O email do usuário é: {userEmail}
                        <button onCLick={limparEmail}>Limpar e-mail</button>
                    </p>
                </div>
            )}
        </form>
    </div>
)

}

export default Condicional