import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function CardClothesMap({data}) {
  return (
    <div className='cardShoes'>

    <Card style={{ width: '12rem' }}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
      $ {data.price}
      </Card.Text>
      <Link to={`/detail/woman/clothes/${data.id_product}`}><Button variant="primary">COMPRAR</Button></Link>
    </Card.Body>
  </Card>
      </div>
  )
}

export default CardClothesMap