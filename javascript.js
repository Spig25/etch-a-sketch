const container = document.querySelector(`.container`)
const button = document.querySelector(`button`)

// Function creates the grid of divs and assigns them to classes
function createGrid (columnAmount, rowAmount) {
    for (i = 0; i < columnAmount; i++) {
        const column = document.createElement(`div`)
        container.appendChild(column).className = `columnClass`
        for (j = 0; j < (rowAmount); j++){
            const box = document.createElement(`div`)
            column.appendChild(box).className = `boxClass`
        }
    }
}
createGrid(16, 16)

let boxNode = document.querySelectorAll(`.boxClass`)

// Iterates through box node list and for every box allow mouseover to
// change the color of said box
boxNode.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = `purple`
        e.style.border = `solid purple 1px`
    })
})


// Button resets game with 100x100 max size
button.addEventListener('click', () => {
    boxNode.forEach((e) => {
        e.style.backgroundColor = ``
        e.style.border = ``
    })
    let reset = prompt(`Enter new grid size`, `16`)
    while (true) {
        if (reset > 100) {
            alert(`100 maximum grid size! Choose again`)
            reset = prompt(`Enter new grid size`, `16`)
        }
        else {
            break
        }
    }
    container.innerHTML = '';
    createGrid(reset, reset)
    boxNode = document.querySelectorAll(`.boxClass`)
    boxNode.forEach((e) => {
        e.addEventListener('mouseover', () => {
            e.style.backgroundColor = `purple`
            e.style.border = `solid purple 1px`
        })
    })
})