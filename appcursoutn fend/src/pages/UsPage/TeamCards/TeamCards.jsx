import React from 'react'

function TeamCards({data}) {
  return (
    <div >
        <div className="teamCards" >
          <img src={data.image} alt="profesional" />
          <h4>{data.job}</h4>
          <h5>{data.name}</h5>
          <p>{data.text}</p>
        </div>
      </div>
  )
}

export default TeamCards