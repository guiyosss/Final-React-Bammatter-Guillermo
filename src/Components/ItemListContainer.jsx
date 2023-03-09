import React from 'react'

const ItemListContainer = (props) => {
  console.log(props);
  return (
    <>

    <div>Bienvenido</div>
    <h2>{props.nombre}</h2>
    <p>{props.otraInfo}</p>
    </>
    
  )
}

export default ItemListContainer