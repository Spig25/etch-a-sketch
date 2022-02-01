const container = document.querySelector(`.container`)
const button = document.querySelector(`button`)

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

const boxNode = document.querySelectorAll(`.boxClass`)

boxNode.forEach((e) => {
    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = `purple`
    })
})

button.addEventListener('click', () => {
    boxNode.forEach((e) => {
        e.style.backgroundColor = ``
    })
})