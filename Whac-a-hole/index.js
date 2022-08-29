const grid = document.getElementById('grid')
const startButton = document.getElementById('start')

createboard(2);

function createboard(amountOfBoxes){
    for (let index = 0; index < amountOfBoxes; index++) {
        const div = document.createElement('div')
        div.setAttribute('data-id',index)
        grid.appendChild(div)
        console.log(document)
    }
}


startButton.addEventListener('click', startGame)

function startGame(){
    
}