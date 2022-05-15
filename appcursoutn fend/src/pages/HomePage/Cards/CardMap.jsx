import React from 'react'
import Card from 'react-bootstrap/Card'
import '../HomePage.css'

function CardMap({data}) {
  return (
    <div className='cardHome'>
      <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
      <Card.Text>
        {data.text}
      </Card.Text>
      </Card.Body>
      </Card>
    </div>
  )
}

export default CardMap