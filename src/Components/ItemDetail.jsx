import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import data from "../data.json"
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  

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

/// useParams para filtrado, en este caso por id
  const {id} = useParams();

  const filtoId = data.filter((prod) => prod.id === id )
  
  
  return (
    <>

    {filtoId.map((prod) =>
      <div key={prod.id}>      
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img} />
          <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text>
              {prod.descripcion}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Categoria: {prod.tipo}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: ${prod.precio}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Stock: {prod.stock}</ListGroup.Item>
          </ListGroup>
          <ListGroup className="list-group-flush">
              <ListGroup.Item><ItemCount/></ListGroup.Item>
          </ListGroup>
        </Card>
      </div>    
      )}
    </>
  )
}

export default ItemDetail