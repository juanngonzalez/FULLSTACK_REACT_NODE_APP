import React, { useEffect, useState } from 'react'
import CardHomePage from './Cards/CardHomePage'
import './HomePage.css'
import {getFetch, getCarousel} from './HomePageData'
import CarouselHomePage from './Carousel/CarouselHomePage'

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    getFetch
    .then((resp) => {
      setData(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'))
    
  },[]) 
  return (
    <div>
      <CardHomePage data={data}/>
      <CarouselHomePage/>
    </div>
  )
}

export default HomePage