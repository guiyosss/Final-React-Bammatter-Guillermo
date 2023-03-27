import ComponenteA from "./Components/ComponenteA";
import ItemListContainer from "./Components/ItemListContainer"
import NavBarBootstrap from "./Components/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState } from "react"; /// prueba esta conformado por 2 partes [var => contador,funcion modificadora => setContador=useState(0)]
import CartWidget from "./Components/CartWidget";
import ItemCount from "./Components/ItemCount";
import ItemProducto from "./Components/Item";
import AppFetchPrueba from "./Components/AppFetchPrueba";
import ItemList from "./Components/ItemList";
import Item from "./Components/Item";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemDetail from "./Components/ItemDetail";
import Cart from "./Components/cart";

const App= () => {
  const Holamundo = () => 
  { console.log("soy un dato de la funcion hola mundo");}

  const Unvalor = (valor) =>{
    console.log(valor);
  } 
  


  return ( 
    
      <BrowserRouter>
          <NavBarBootstrap/>


        <Routes>
            <Route exact path="/" element= {<ItemListContainer/>}/>
            <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
            <Route exact path="/ItemDetail/:id" element= {<ItemDetail/>}/>
            <Route exact path="/category/:category" element={<ItemListContainer/>}/>
            <Route exact path="/cart/" element={<Cart/>}/>


        </Routes>

      
      </BrowserRouter>
  )
}

export default App

