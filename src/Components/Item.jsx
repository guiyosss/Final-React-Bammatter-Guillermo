import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Item({id, nombre, descripcion, stock, tipo, Img, precio}) {
  
  return (
    <>
      <div key={id}>      
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{id}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Categoria:{tipo}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Precio:{precio}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Stock: {stock}</ListGroup.Item>
        </ListGroup>
        </Card>
      </div>    

  </>

  );
}

export default Item;

/* es un componente destinado a mostrar informacion breve del producto que el user cleckerara luego para acceder a los detalles (lo desarrollaremos mas adelante)*/

/* aca debe ir una card */