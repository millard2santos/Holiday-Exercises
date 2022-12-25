const form = document.querySelector('form')
const span = document.querySelector('span')


const calcularCoste = (data) => {
    span.innerText = costeHotel(data) + costeAvion(data) + costeCoche(data)
}
const costeHotel = ({ night }) => {
    return 140 * night
}
const costeAvion = ({ city, night }) => {
    let coste = 0
    switch (city) {
        case 'barcelona':
            coste = 90
            break
        case 'madrid':
            coste = 90
            break
        case 'sevilla':
            coste = 50
            break
        case 'valencia':
            coste = 40
            break
    }
    if (night > 3){
        return coste - (coste *0.1)
    }else{
        return coste
    }
}
const costeCoche = ({car}) => {
    let coste = 40 * car
    switch (true){
        case car >= 7 :
            return coste - 20
            break
        case car >= 3 :
            return coste - 50
            break
        default:
            return coste
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = {
        city: event.target.city.value,
        night: event.target.night.value,
        car: event.target.car.value
    }
    calcularCoste(data)
})


