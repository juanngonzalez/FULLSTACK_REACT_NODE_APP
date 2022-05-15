import React, { useState, useEffect } from 'react'
import CardClothesContainer from './CardClothes/CardClothesContainer'
import {getShoesProm, getWantedProm} from '../ClothesPageData'
import BlackBar from '../../../componentes/BlackBar/BlackBar'

import axios from 'axios';


function WomanClothesPage() {
  // const [shoes,setShoes] = useState([])
  const [clothes,getClothes] = useState([])
  useEffect(() => {

    const loadClothes = async () => {
      
      const response = await axios.get('http://localhost:3000/api/clothes')
      getClothes(response.data)

     
    }

    loadClothes();
    console.log(clothes)
    // getShoesProm
    // .then((resp) => {
    //   setShoes(resp)
    // })
    // .catch(err => console.log(err))
    // .finally(console.log('finalizado'));
    
    
  },[])

  


  return (
    <div>
      <CardClothesContainer clothes={clothes}/>
      <BlackBar/>
      <CardClothesContainer clothes={clothes}/>
    </div>
  )
}

export default WomanClothesPage