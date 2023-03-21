import React from 'react'
import ItemList from './ItemList';


const ItemListContainer = (props) => {

  const getDatos =() => {
    return new Promise((resolve, reject) => {
        if(data.length === 0){
            reject(new Error ("no hay datos"))
        }
        setTimeout (() => {
            resolve(data) 
        },2000);
    })
  }   

///getDatos().then((data)=>console.log(data))

  async function fetchingData() {
      try {
          const datosFetched = await getDatos()
          console.log(datosFetched); 
      } catch (err) {
          console.log(err);
      }
  }

  fetchingData();
  
  console.log(props);
  return (
    <>

    <div>Bienvenido</div>
    <h2>{props.nombre}</h2>
    <p>{props.otraInfo}</p>
    <div><ItemList/></div>
    </>
    
  )
}

export default ItemListContainer

/* aca debe ir (promise) */