import React, { useContext } from 'react'
import {useCartContext} from '../CartPage/CartContext'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Counter from '../../componentes/Counter/Counter'
import { useState } from 'react';



function ItemDetail({producto}) {

  const {agregarAlCarrito} = useCartContext()
    
  const [show, setShow] = useState(true)
    
    const onAdd = (cantidad) => {
      setShow(false)
      agregarAlCarrito({...producto, cant: cantidad})
    }
    
    return (
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Card style={{ width: '14rem', margin:"15px", marginTop:"20px" }}>
        <Card.Img style={{width:"13.9rem"}} src={producto.image} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            Precio: {producto.price}
          </Card.Text>
        </Card.Body>
        </Card>
        {show ? <Counter initial={1} max={10} onAdd={onAdd}/> : 
        <div>
          <Link to='/cart'><Button className='agregar'>Terminar la compra</Button></Link>
          <Link to='/skate'><Button>Seguir comprando</Button></Link>
        </div>}
      </div>
      )
}

export default ItemDetail