const form = document.querySelector('form')
const ul = document.querySelector('ul')
const clear = document.querySelector('.clear')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.list.value) {
        const text = event.target.list.value[0].toUpperCase() + event.target.list.value.slice(1).toLowerCase()
        addList(text)
    }
})

const addList = (text) => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    p.innerText = text
    button.innerText = 'Remove'
    button.classList.add('removebutton')
    button.addEventListener('click', (event) => {
        event.target.parentElement.parentElement.remove();
    })
    div.classList.add('divstyle')
    div.append(p, button)
    li.append(div)
    ul.append(li);
}

clear.addEventListener('click', () => {
    const list = document.querySelectorAll('li')
    list.forEach(el => el.remove())
})