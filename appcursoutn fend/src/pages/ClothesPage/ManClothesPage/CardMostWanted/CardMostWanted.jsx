import React from 'react'
import '../ClothesPage.css'
import MapMostWanted from './MapMostWanted'

function CardMostWanted({clothes}) {

  const {id_product} = clothes

  return (
    <>
      <h3>Most wanted</h3>
    <div className='shoesCardContainer'>
        {clothes.map((clothes) => (
        <MapMostWanted key={id_product} data={clothes}/>
  ))}
    </div>
    </>
  )
}

export default CardMostWanted