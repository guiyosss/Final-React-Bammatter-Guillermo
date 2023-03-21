import React from 'react'
import { useState, useEffect } from "react"; /// prueba esta conformado por 2 partes [var => contador,funcion modificadora => setContador=useState(0)]

const ItemCount = () => {
    const [itemContador , setContadorItem] = useState(0) ///contador de carrito

    const sumarItem = () => {
    if (itemContador > 10 ) {///stock definido  
        alert("no se puede seguir agregando mas productos (sin stock)")
    }
    else {
        setContadorItem(itemContador+1)
        document.getElementById("buttonRest").disabled = false;
    } 
    }
    
    const restarItem = () => {
    if (itemContador < 1) {
        document.getElementById("buttonRest").disabled = true;      
    }
    
    else {
        setContadorItem(itemContador-1)
    }
    }

    const onAdd = () =>{
        console.log("agregar al carro");
    }
return (
    <>
        <div>
            <button className="btn btn-primary btn-sm mb-2" onClick={sumarItem}>
                <i className="fas fa-plus"></i> {/* icono + */}
            </button>
            <div className="form-outline">
                <label className="form-label" >{itemContador} Cantidad</label>
            </div>
            <button className="btn btn-primary btn-sm mb-2" id="buttonRest" onClick={restarItem}>
                <i className="fas fa-minus"></i> {/* icono - */}
            </button>
            <br />
            <button type="button" className="btn btn-primary btn-sm mb-2" 
            onClick={() => setContadorItem((setContadorItem) => setContadorItem=0)}>
                <i className="fas fa-trash"></i>
            </button>
            <div>
                <button className="btn btn-primary btn-sm mb-2" onClick={onAdd} >Agregar al carrito</button>
            </div>
        </div>
    </>
)
}

export default ItemCount

