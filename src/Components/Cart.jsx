import React, { useState } from 'react'


const Cart = () => {
///Formulario
    const [nombre, setNombre] = useState("")
    const [email, setEmail ] = useState("")

const handleSubmit =(e) =>{
  e.preventDefault()
  console.log("Nombre" + " " + nombre);
  console.log("Email" + " " + email);
}


/*   const noVocals=(e) =>{
  if(
    e.key === "a" ||
    e.key === "e" ||
    e.key === "i" ||
    e.key === "o" ||
    e.key === "u" 
    )
    {e.preventDefault()}
    else{
      consle.log(e.key)
    }
  } */

  return (
  <>
    <div>hola soy el carrito</div>

{/*     <input type="text" onKeyDown={noVocals} /> 
 */}    
  {/* formulario */}
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e)=>setNombre (e.target.value)} />
    <input type="email" onChange={(e)=>setEmail (e.target.value)} />
    <button type='submit'>enviar</button>
  </form>
  
  </>
  )
}

export default Cart