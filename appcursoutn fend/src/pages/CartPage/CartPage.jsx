import { useCartContext } from './CartContext'
import { Card,Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useState } from "react"
import './CartPage.css'

function Cart() {
    
    const { cartList, vaciarCarrito, deleteItem, total, eliminarUno, sumarUno } = useCartContext()


    return (
        <>
            <h3>Carrito</h3>
            <div className='cartShopContainer'>
            <div className='productContainer'>
            {cartList.map(prod => 
            <div key={prod.id_product} className='listContainer'>
                <img style={{width:'5rem'}} src={prod.image} />
                    <ul>
                        <li>{prod.name}</li>
                        <li>{prod.cant}</li>
                        <li>Precio: {prod.price}</li>
                        <li>Subtotal: {prod.price * prod.cant}</li>
                    </ul>
                <button className='delete' onClick={() => deleteItem(prod.id_product)}>x</button>
                <button className='plus' onClick={() => sumarUno(prod.id_product)}>+</button>
                <button className='resta' onClick={() => eliminarUno(prod.id_product)}>-</button>
            </div>
             )
             
            }
            </div>
            </div>
            
            {
            cartList.length === 0 ? <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div><p>vuelva al inicio para comprar</p></div><Link to='/'><Button>Volver al inicio</Button></Link></div>
                :
                <div>
                    <p className="totalCarrito">{`Total: ${total()}`}</p>
                    <Button className="eliminar" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    
                </div>
            }
            
        </>
    )
}

export default Cart