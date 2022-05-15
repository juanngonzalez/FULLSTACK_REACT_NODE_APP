import React from 'react'

import CardMap from './CardMap'
import '../HomePage.css'



function CardHomePage({data}) {
  return (
    <div className='cartContainer'>
      {data.map((data) => (
        <CardMap key={data.id} data={data}/>
  ))}
    </div>      
  )
}

export default CardHomePage