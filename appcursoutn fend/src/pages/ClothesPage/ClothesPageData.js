const shoes = [
    {
        id: '1',
        name: 'Vans shoes 1',
        stock: 50,
        price: 8000,
        image: '../assets/zapatillas vans clasic.jpg'
    },
    {
        id: '2',
        name: 'Vans shoes 2',
        stock: 50,
        price: 7500,
        image: '../assets/zapatillavans2.png'
    },
    {
        id: '3',
        name: 'Vans shoes 3',
        stock: 50,
        price: 10000,
        image: '../assets/zapatillavans3.png'
    },
    {
        id: '4',
        name: 'Vans shoes 4',
        stock: 50,
        price: 9500,
        image: '../assets/zapatillavans4.png'
    }
]

export const getShoesProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(shoes)
    },0)
})
const mostWanted = [
    {id:'1',name:'Vans backbag',price:10000,stock:50,image:'../assets/mochilavans.png'},
    {id:'2',name:'Vans snapback',price:5000,stock:50,image:'../assets/gorravans.png'},
    {id:'3',name:'Caracruz Shirt',price:5000,stock:50,image:'../assets/lompas santacruz.png'},
    {id:'4',name:'Vans hoodie',price:9000,stock:50,image:'../assets/buzonenes.png'}
]
export const getWantedProm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mostWanted)
    },0)
})