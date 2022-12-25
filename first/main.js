const button = document.querySelectorAll('button')
const span = document.querySelectorAll('span')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const reset = document.querySelector('.reset')
const div = document.createElement('div')
const color1 = 'bg-blue-400'
const color2 = 'bg-red-400'

const hold = (winner) => {
    console.log(winner);
    div.classList.add('win')
    div.innerText = `Player ${winner + 1} Wins!!`
    reset.innerText = 'Reset'
    if (winner === 0) {
        div.classList.add(color1)
        reset.classList.add(color2)
    } else {
        div.classList.add(color2)
        reset.classList.add(color1)
    }
    container.append(div)
}

button.forEach((el, i) => {
    el.addEventListener('click', () => {
        if(input.value <= 0){
            alert('El minimo de puntos debe ser 1!!')
        }else{
            console.log(i, span[i].innerText);
            if (span[0].innerText === input.value || span[1].innerText === input.value) {
                alert('Pulsa "Reset" para volver a empezar!!')
            } else if (Number(span[i].innerText) < input.value - 1) {
                span[i].innerText = Number(span[i].innerText) + 1
            } else {
                span[i].innerText = Number(span[i].innerText) + 1
                hold(i)
            }
        }
    })
})


reset.addEventListener('click', () => {
    span.forEach(el => el.innerText = '0')
    reset.classList.remove(color1)
    reset.classList.remove(color2)
    div.classList.remove(color1)
    div.classList.remove(color2)
    div.remove()

})





