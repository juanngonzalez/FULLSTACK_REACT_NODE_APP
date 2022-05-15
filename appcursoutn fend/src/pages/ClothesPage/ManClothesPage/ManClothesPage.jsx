import React, { useState, useEffect } from 'react'
import CardShoesContainer from './CardShoesPage/CardShoesContainer'
import {getShoesProm, getWantedProm} from '../ClothesPageData'
import BlackBar from '../../../componentes/BlackBar/BlackBar'
import CardMostWanted from './CardMostWanted/CardMostWanted'
import axios from 'axios';


function ManClothesPage() {
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
      <CardMostWanted clothes={clothes}/>
      <BlackBar/>
      <CardShoesContainer clothes={clothes}/>
    </div>
  )
}

export default ManClothesPage