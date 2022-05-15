import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'


function CardMapSkate({data}) {
  
  const {name, price, id_product, image} = data;
  
  return (
    <div className='cardHome'>
  <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={image}></Card.Img>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    $ {price}
    </Card.Text>
    <Link to={`/detail/skate/${id_product}`}><Button variant="primary">COMPRAR</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default CardMapSkate