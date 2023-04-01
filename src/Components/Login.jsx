import React, { useState } from 'react'

const Login = () => {
    ///Formulario login
    
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    const loginSubmit =(e) =>{
        e.preventDefault()
        console.log("Usuario" + " " + user);
        console.log("Contra" + " " + pass);
}



  return (
    <>
        <div>pagina Login</div>
        {/* formulario login */}
        <form onSubmit={loginSubmit}>
            <input type="text" onChange={(e)=>setUser (e.target.value)} />
            <input type="password" onChange={(e)=>setPass (e.target.value)} />
            <button type='submit'>entrar</button>
        </form>
    </>

  )
}

export default Login