import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSkatesProm } from '../../SkatePageData'
import ItemDetail from '../../ItemDetail'
import axios from 'axios'



function SkateDetail() {
    const [producto, setProducto] = useState({})
    // const [loading, setLoading] = useState()
    const {idDetalle} = useParams()
    useEffect(()=>{

        
        const detail = async function(){
            const response = await axios.get('http://localhost:3000/api/skates')
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

export default SkateDetail