const imagesCard = [{
        image: './assets/OIP (1).jpg',
        text: 'Quienes andan sobre cuatro ruedas en busqueda de adrenalina y aventuras estan en el lugar correcto.',
        id: '1'
    },
    {
        image: './assets/OIP.jpg',
        text: 'Algunos trucos son mas complejos que otros, todo depende de la practica y no del skate.',
        id: '2'
    },
    {
        image: './assets/R.png',
        text: 'Cuando busques un lugar de confianza para adquirir tus prendas y tablas, siempre vas a llegar a nosotros.',
        id: '3'
    }
]

export const getFetch = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(imagesCard)
    }, 0)
})
export const imagesCarousel = [{
    image: './assets/skaterxl.jpg',
    title: '¿Preparado para competir?',
    text: 'Nuestros eventos estan diferenciados por edad y tipo de circuito.',
    id: '1'
},
{
    image: './assets/carrusel.jpg',
    title: 'Bowl & StreetStyle',
    text: 'Podes elegir entre la competencia estilo callejero o la olla, depende de ti.',
    id: '2'
},
{
    image: './assets/competidores.jpg',
    title: 'Competidores',
    text: 'Para ser parte del evento debes ser mayor de 16 años, y no te preocupes por ganar, todos aqui buscamos divertirnos.',
    id: '3'
}
]