import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';



const ItemDetail = ({filtroId}) => {
  
  return (
    <>

    {filtroId.map((prod) =>
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