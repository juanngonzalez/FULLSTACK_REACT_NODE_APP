import React from 'react'
import {imagesCarousel} from '../HomePageData'
import {Carousel} from 'react-bootstrap'
import '../HomePage'

function CarouselHomePage() {
  
  return (
    <div className='carouselContainer'>
      <Carousel style={{width:'70rem'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagesCarousel[0].image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>{imagesCarousel[0].title}</h2>
      <p>{imagesCarousel[0].text}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagesCarousel[1].image}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>{imagesCarousel[1].title}</h2>
      <p>{imagesCarousel[1].text}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagesCarousel[2].image}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>{imagesCarousel[2].title}</h2>
      <p>{imagesCarousel[2].text}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselHomePage