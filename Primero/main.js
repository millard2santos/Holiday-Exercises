const span = document.querySelectorAll('.container span')
const body = document.querySelector('body')
const buttons = document.querySelectorAll('button')
console.log(buttons);
const input = document.querySelector('input')

const game = () => {
    buttons.forEach((el, i) => {
        const colors = ['hsl(208, 85%, 63%)', 'hsl(144, 85%, 60%)', 'hsl(14, 85%, 60%)']
        buttons[i].style = `background-color : ${colors[i]}`
        el.addEventListener('click', () => {
            if (i === 2) {
                span.forEach(el => el.innerText = '0')
            } else {
                if (span[i].innerText < input.value)
                span[i].innerText++
            }
            
            if (span[0].innerText === input.value || span[1].innerText === input.value) {
                
                const win = document.createElement('div')
                const spanWin = document.createElement('span')
                if (span[0].innerText === input.value) {
                    spanWin.innerHTML = `PLAYER 1 Wins!! Weeeepa!`
                } else {
                    spanWin.innerHTML = `PLAYER 2 WINS!! Weeeepa`
                }
                win.classList.add('win')
                body.append(win)
                win.append(spanWin)
                span.forEach(el => el.innerText = '0')
            }

        })
    })
   

}

game()