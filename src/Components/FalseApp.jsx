import React from 'react'
import data from "../data.json"

const FalseApp = () => {
    /* const aplicarDescuento = new Promise( (resolve, reject)=> {
        const descuento = false  /// validado

        if (descuento){
            resolve("descuento aplicado")
        }
        else {
            reject("descuento NO aplicado")
        }
    })

    console.log(aplicarDescuento)

    aplicarDescuento
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => 
    console.log(error)) */

    ///



    /// contenedor
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

    return (
    <>
        <div>FalseApp</div>
        <div>
        <h3>data</h3> {/* acontinuacion tendremos el llamado a los contenidos apartir de su id */}
        {data.map((prod)=>{
            return(
                <div key={prod.id}>
                    <h2>nombre{prod.nombre}</h2>
                    <p>Tipo de producto{prod.tipo}</p>
                    <p>${prod.precio}</p>
                    <p>Stock{prod.stock}</p>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default FalseApp