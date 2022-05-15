import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function CarouselClothesPage() {
  return (
        <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./assets/baner vans.png"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./assets/banner vans 2.png"
        alt="Second slide"
      />
    </Carousel.Item>
  </Carousel>
  
  )
}

export default CarouselClothesPage