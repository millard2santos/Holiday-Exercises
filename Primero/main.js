const span = document.querySelectorAll('span')
const buttons = document.querySelectorAll('button')
console.log(buttons);
const input = document.querySelector('input')


buttons.forEach((el,i) => {
    const colors = ['blue', 'green', 'red']
    buttons[i].style = `background-color : ${colors[i]}`
    el.addEventListener('click', ()=>{
        if(i === 2){
            span.forEach(el => el.innerText = '0')
        }else{
            if (span[i].innerText < input.value)
            span[i].innerText++
        }
        
    })
})
