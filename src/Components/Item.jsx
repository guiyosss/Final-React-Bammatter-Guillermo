import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({id, nombre,stock, img, precio}) => {
    return (
        <>
        <div key={id}>      
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                <ListGroup.Item>Categoria: {tipo}</ListGroup.Item>
            </ListGroup> */}
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Stock: {stock}</ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <Link to={`/itemDetail/${id}`}> 
                        <button>
                            Detalle
                        </button>
                    </Link>
                </ListGroup.Item>
            </ListGroup>
            </Card>
        </div>    
    
        </>
    
    );
}
    
    export default Item;