import React, {useState, useEffect} from 'react'
import {getWantedProm} from '../../../ClothesPageData'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../../ItemDetail'
import axios from 'axios';

function MostWantedDetail() {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
        const detail = async function(){
            const response = await axios.get('http://localhost:3000/api/clothes')
            console.log(response)
            setProducto(response.data.find(prod => prod.id_product == idDetalle));
        }
        
       
        
        detail();
    },[idDetalle])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default MostWantedDetail