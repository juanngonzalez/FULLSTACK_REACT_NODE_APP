import React, { useState,useEffect } from "react";
import './UsPage.css'
import {getTeam} from './TeamData'
import TeamCardContainer from "./TeamCards/TeamCardContainer";
import {Link} from 'react-router-dom'

function UsPage() {
  const [team,setTeam] = useState([])
  useEffect(() => {
    getTeam
    .then((resp) => {
      setTeam(resp)
    })
    .catch(err => console.log(err))
    .finally(console.log('finalizado'));
    
    
  },[])

  return (
    <>
    <div>
      <h3>About Us</h3>
      <div className="aboutUsContainer">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum in
          quidem omnis. Repellendus quis, molestiae repellat possimus, libero
          distinctio minus officiis, ullam qui nam amet dicta esse laboriosam
          tenetur? Magnam.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Eum in quidem omnis. Repellendus quis, molestiae repellat
          possimus, libero distinctio minus officiis, ullam qui nam amet dicta
          esse laboriosam tenetur? Magnam
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum in
          quidem omnis. Repellendus quis, molestiae repellat possimus, libero
          distinctio minus officiis, ullam qui nam amet dicta esse laboriosam
          tenetur? Magnam.Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Eum in quidem omnis. Repellendus quis, molestiae repellat
          possimus, libero distinctio minus officiis, ullam qui nam amet dicta
          esse laboriosam tenetur? Magnam
        </p>
      </div>
    </div>
    <div>
      <TeamCardContainer dataOne={team}/>
      
    </div>
    
    </>
  );
}

export default UsPage;
