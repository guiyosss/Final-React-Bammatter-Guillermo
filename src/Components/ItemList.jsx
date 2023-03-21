import React from 'react'
import data from "../data.json"
import Item from './Item'


const ItemList = () => {
  return (
    <>
    <div className='catalogo'>
      {data.map((prod)=>{
        return (        
          <Item>
            key={prod.id},
            id={prod.id},
            nombre={prod.nombre},
            descripcion={prod.descripcion},
            precio={prod.precio},
            stock={prod.stock},
            tipo={prod.tipo},
            img={prod.img}
          </Item>
          )

        }) }
    </div>
    </>
  )
}


export default ItemList

/* es un agrupador de componentes ITEM.jsx (deberas incluirlo dentro de una ItemListContainer de la preimera pre-entrega de l proyecto final) */

/* ACA debe ir (Map) */