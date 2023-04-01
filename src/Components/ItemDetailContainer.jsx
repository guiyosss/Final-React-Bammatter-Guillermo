import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import data from "../data.json"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
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
      } catch (error) {
          console.log(error);
      }
  }
  fetchingData();

  /// use effect no aplicado
  const [prod,setProd] =useState([])
  console.log();

  useEffect(()=>{
    fetchingData().then((prod) => setProd(prod));
  }, []);


/// useParams para filtrado, en este caso por id
  const {id} = useParams();

  const filtroId = data.filter((prod) => prod.id === id )

  return (
    <>
      <div>ItemDetailContainer</div>
      <ItemDetail filtroId={filtroId}>
      </ItemDetail>
    </>
  )
}

export default ItemDetailContainer