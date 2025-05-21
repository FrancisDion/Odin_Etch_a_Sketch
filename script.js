// set default values
const DEFAULT_SIZE = 4;

// set current value
let currentSize = DEFAULT_SIZE;

// set Doccument variables
const grid = document.getElementById('grid') 


const createGrid = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
    }
}


const changeColor = (e) => {
    const randomR = Math.floor(Math.random()* 256)
    const randomG = Math.floor(Math.random()* 256)
    const randomB = Math.floor(Math.random()* 256)
    let randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    return e.target.style.backgroundColor = randomColor
}


createGrid(DEFAULT_SIZE);