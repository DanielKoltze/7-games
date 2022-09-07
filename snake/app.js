const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d');

//let blockList = initializeCanvas(15)

let blockWidth = 40;
let blockHeight = 40;


let snakeCoordinates = [[10,10]]
console.log(snakeCoordinates.length)

/*
function initializeCanvas(height){
    for (let i = 0; i < height; i++) {
        let fastArray = []
        for (let j = 0; j < height*2; j++) {

            const element = document.createElement('div')
            element.classList.add('block')
            canvas.appendChild(element)
            
        }
        
    }
}
*/

function clearCanvas(){

}


function drawSnakePart(x,y){
    console.log(x + ' ' + y)
    ctx.fillStyle = 'green';
    ctx.fillRect(20, 10, 150, 100);
}

function drawSnake(){
    for (let i = 0; i < snakeCoordinates.length; i++) {
        drawSnakePart(snakeCoordinates[i][0],snakeCoordinates[i][1])
        
    }
}
drawSnake()


function createEvents(){

}