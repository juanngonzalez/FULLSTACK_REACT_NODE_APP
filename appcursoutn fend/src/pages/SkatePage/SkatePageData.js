const productSkate = [
    {id:'1',name:'Skate Element',price:15000,stock:50,image:'../../assets/skate 1.jpg'},
    {id:'2',name:'Skate Element',price:15000,stock:50,image:'../../assets/skate 2.jpg'},
    {id:'3',name:'Skate Oxelo',price:9000,stock:50,image:'../../assets/skate 3.jpg'},
    {id:'4',name:'Table Mistery',price:8000,stock:50,image:'../../assets/tabla 1.jpg'},
    {id:'5',name:'Table Element',price:9000,stock:50,image:'../../assets/tabla 2.jpg'},
    {id:'6',name:'Table Element',price:9000,stock:50,image:'../../assets/tabla 3.jpg'}
]

export const getSkatesProm = new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve(productSkate)
    },0)
})
const productTrucks = [
    {id:'1',name:'Truck Venture',price:15000,stock:50,image:'../../assets/eje 1.jpg'},
    {id:'2',name:'Truck Jounes',price:15000,stock:50,image:'../../assets/eje 2.jpg'},
    {id:'3',name:'Truck King',price:9000,stock:50,image:'../../assets/eje 3.jpg'},
    {id:'4',name:'Wheele SpitFire',price:8000,stock:50,image:'../../assets/ruedas 1.jpg'},
    {id:'5',name:'Wheele SpitFire',price:9000,stock:50,image:'../../assets/ruedas 2.jpg'},
    {id:'6',name:'Wheele Haze',price:9000,stock:50,image:'../../assets/ruedas 3.jpg'}
]

export const getTrucksProm = new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve(productTrucks)
    },0)
})