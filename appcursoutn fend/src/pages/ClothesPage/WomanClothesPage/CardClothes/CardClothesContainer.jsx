import React from 'react'
import CardClothesMap from './CardClothesMap'
import '../../ClothesPage.css'

function CardClothesContainer({clothes}) {
  return (
      <>
      <h3>Clothes</h3>
    <div className='shoesCardContainer'>
        {clothes.map((clothes) => (
        <CardClothesMap key={clothes.id_product} data={clothes}/>
  ))}
    </div>
    </>
  )
}

export default CardClothesContainer