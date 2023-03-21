import React from 'react'
import { useState, useEffect } from 'react'
import ComponenteA from './ComponenteA'
import ComponenteB from './ComponenteB'

///https://fakestoreapi.com/products

const AppFetchPrueba = () => {
    const getProducts=async ( )=> {
        const response = await fetch("https://fakestoreapi.com/products")
        const laData = await response.json()
        return laData
    }

    const [product, setProduct] = useState([])
    console.log(product);

  useEffect(()=> { ///por lo general para que no se realice peticiones constantes a la api/servidorext
    getProducts().then((product)=>setProduct(product))
  },[]); ///el parametro o call que se escriba entre corchetes mandara a actualiza la API/servidorext.

 

  return (

    <>
      <div>
        {product.map((prod) => {
          return (
            <ComponenteB key={prod.id} title={prod.title} price={prod.price}/>
          )
          })

          
        }
      </div>
    </>
  )
}

export default AppFetchPrueba