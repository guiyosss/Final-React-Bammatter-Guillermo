import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import data from "../data.json"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Item from './Item';



const ItemListContainer = (props) => {


  ///obtencion de datos mediante archivo json (data.json)
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

    ///getDatos().then((data)=>console.log(data)) prueba

  async function fetchingData() {
      try {
          const datosFetched = await getDatos()
          console.log(datosFetched); 
      } catch (error) {
          console.log(error);
      }
  }
  fetchingData();


  console.log(props);

  /// useeffect no aplicado
const [prod,setProd] =useState([])
  console.log();
useEffect(()=>{
  getDatos().then((prod) => setProd(prod));
}, []);


///*Filtro por categoria
const {category} = useParams();

const catFilter = data.filter((prod) => prod.tipo === category )



  return (
    <>

    <div>Bienvenido</div>
    <Link to="/ItemDetailContainer">
      <button>
        ir a ItemDetailContainer
      </button>
    </Link>
 
    <p>{props.otraInfo}</p>
{/*     <div>
      <ItemList data={data}/> ///para mostrar las listas sin categoria
    </div> */}
    <div>
      {category ? <ItemList data={catFilter}/>:<ItemList data={data} />}
    </div> 
    </>
    
  )
}

export default ItemListContainer

/* aca debe ir (promise) */