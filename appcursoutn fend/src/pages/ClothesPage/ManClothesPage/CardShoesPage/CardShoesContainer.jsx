import React from 'react'
import CardShoesMap from './CardShoesMap'
import '../ClothesPage.css'

function CardShoesContainer({clothes}) {
  return (
      <>
      <h3>Clothes</h3>
    <div className='shoesCardContainer'>
        {clothes.map((clothes) => (
        <CardShoesMap key={clothes.id_product} data={clothes}/>
  ))}
    </div>
    </>
  )
}

export default CardShoesContainer