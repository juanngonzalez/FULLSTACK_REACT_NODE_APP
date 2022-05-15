import React from 'react'
import CardMapSkate from './CardMapSkate'
import '../SkatePage.css'

function CardSkatePage({dataOne}) {
  return (
  <>
    <h3>Skates</h3>
    <div className='cartContainerSkate'>
      {dataOne.map(data => (
        <CardMapSkate key={data.id_product} data={data}/>
  ))}
    </div>
  </>
  )
}

export default CardSkatePage