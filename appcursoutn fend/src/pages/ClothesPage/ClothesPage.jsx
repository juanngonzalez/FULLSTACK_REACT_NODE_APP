import React from 'react'
import { Link } from 'react-router-dom'
import CarouselClothesPage from './CarouselClothesPage/CarouselClothesPage'
import './ClothesPage.css'

function ClothesPage() {
  return (
    <>
    <div className='carouselClothesContainer'>
      <Link to='/clothes/man'><CarouselClothesPage/></Link>
    </div>
    <div className='clothesImageContainer'>
      <Link to='/clothes/man'><img src="./assets/hombre ropa.png" alt="man clothes" /></Link>
      <Link to='/clothes/woman'><img src="./assets/mujer ropa.png" alt="man clothes" /></Link>
      <Link to='/clothes/kids'><img src="./assets/ropa nenes.png" alt="man clothes" /></Link>
    </div>
    <div className='bannerContainer'>
      <Link to='/clothes/man'><img src="./assets/bannner vans.jpg"/></Link>
    </div>
    </>
  )
}

export default ClothesPage