import ComponenteA from "./Components/ComponenteA";
import ItemListContainer from "./Components/ItemListContainer"
import NavBarBootstrap from "./Components/NavBar"

import { useState } from "react"; /// prueba esta conformado por 2 partes [var => contador,funcion modificadora => setContador=useState(0)]
import CartWidget from "./Components/CartWidget";
import ItemCount from "./Components/ItemCount";
import ItemProducto from "./Components/Item";
import AppFetchPrueba from "./Components/AppFetchPrueba";

const App= () => {
  const Holamundo = () => 
  { console.log("soy un dato de la funcion hola mundo");}

  const Unvalor = (valor) =>{
    console.log(valor);
  } 
  


  return ( 
    <>
      <nav className="barra">
        <NavBarBootstrap/>
      </nav>
      <div className="cuerpo">
        {<ItemListContainer nombre={"Hola soy un props"} edad={30} otraInfo={"strings"} />}
      </div>
      <div>
        <ItemCount/>
      </div>
      <div className="solo un div">
        <ComponenteA Holamundo={Holamundo} Unvalor={Unvalor}/>
      </div>
      
      
    </>
  )
}

export default App

