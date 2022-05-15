import React from 'react'
import './GiftCard.css'
import {Link} from 'react-router-dom'

function GiftCard() {
  return (
    <div className='giftCardContainer'>
        <Link to='/contact'><img src="./assets/Gift-Cards-1.jpg" alt="giftcard image" /></Link>
    </div>
  )
}

export default GiftCard