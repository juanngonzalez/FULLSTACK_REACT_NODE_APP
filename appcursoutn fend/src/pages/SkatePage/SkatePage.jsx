import React, { useState,useEffect } from 'react'
import CardSkatePage from './CardSkatePage/CardSkatePage'
import {getSkatesProm, getTrucksProm} from '../SkatePage/SkatePageData'
import CardTruckPage from './CardTruckPage/CardTruckPage'
import './SkatePage.css'
import GiftCard from '../../componentes/GiftCard/GiftCard'
import BlackBar from '../../componentes/BlackBar/BlackBar'
import axios from 'axios'

function SkatePage() {
  const [skates,getSkates] = useState([])
  const [trucks,getTrucks] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {

    const loadSkates = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/skates')
      getSkates(response.data)
      setLoading(false)
    }
    
    // getSkatesProm
    // .then((resp) => {
    //   getSkates(resp)
    // })
    // .catch(err => console.log(err))
    // .finally(console.log('finalizado'));
    
    loadSkates();
  },[])

  useEffect(() => {
    
    const loadTrucks = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/trucksandwheels')
      getTrucks(response.data)
      setLoading(false)
    }
    
    loadTrucks();
    // getTrucksProm
    // .then((resp) => {
    //   getTrucks(resp)
    // })
    // .catch(err => console.log(err))
    // .finally(console.log('finalizado'));
  },[])
  
  
  return (
    <div>
      <CardSkatePage dataOne={skates}/>
      <BlackBar/>
      <CardTruckPage dataTwo={trucks}/>
      <GiftCard/>
    </div>
  )
}

export default SkatePage