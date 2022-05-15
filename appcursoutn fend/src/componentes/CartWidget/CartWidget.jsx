import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useCartContext } from '../../pages/CartPage/CartContext'
import './CartWidget.css'

function CartWidget() {
  

    const { cantidadTotal } = useCartContext()
    return (
        <div>
            {cantidadTotal() === 0 ? undefined : <div className='cantidadTotal'>{cantidadTotal()}</div>}
            <div className='cartWidget' >
            <AiOutlineShoppingCart/>
            </div>
        </div>
    )
}

export default CartWidget