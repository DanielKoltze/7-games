const canvas = document.getElementById('gameCanvas')
const reset = document.querySelector('.reset')


let blockWidth = 40;
let blockHeight = 40;

let direction = 1 //frem når det er et
let sideBlocks = 10

let snakeCoordinates = [12,11,10]

let foodCoordinate
let interval

function initializeCanvas(height){
    for (let i = 0; i < height; i++) {
        let fastArray = []
        for (let j = 0; j < height; j++) {

            const element = document.createElement('div')
            element.classList.add('block')
            canvas.appendChild(element)
            
        }
        
    }
}


initializeCanvas(10)



//eveything above this comment is initialize




const blocks = document.querySelectorAll('.block')
drawSnake()

function drawSnake(){
    for (let i = 0; i < snakeCoordinates.length; i++) {
        blocks[snakeCoordinates[i]].classList.add('snake')
    }
}

function startGame(){
    drawFood()
    interval = setInterval(checkBoard,400)
}


function drawFood(){
    foodCoordinate = Math.floor(Math.random()*blocks.length)
    if(snakeCoordinates.includes(foodCoordinate)){
        drawFood()
    }
    blocks[foodCoordinate].classList.add('apple')
}

function checkBoard(){
    moveSnake()
    eatApple()
    checkCollisions()

}
function moveSnake(){
    for (let i = 0; i < snakeCoordinates.length; i++) {
        blocks[snakeCoordinates[i]].classList.remove('snake')
    }
    const tail = snakeCoordinates.pop()
    blocks[tail].classList.remove()
    if(snakeCoordinates[0] % sideBlocks == 9 && direction === 1){
        snakeCoordinates.unshift(snakeCoordinates[0]-sideBlocks+1)
    }else if(snakeCoordinates[0] % sideBlocks == 0 && direction === -1){
        snakeCoordinates.unshift(snakeCoordinates[0]+sideBlocks-1)
    }else{
    snakeCoordinates.unshift(snakeCoordinates[0]+direction)
    }
    console.log(snakeCoordinates)
    drawSnake()

    // 0 % 10 == 10
    // 10 % 10 == 10
    
}


document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight' && !(direction === -1)){
        direction = 1
    }else if(e.key === 'ArrowLeft' && !(direction === 1)){
        direction = -1
    }else if(e.key === 'ArrowDown' && !(direction === -sideBlocks)){
        direction = sideBlocks
    }else if(e.key === 'ArrowUp' && !(direction === sideBlocks)){
        direction = -sideBlocks
    }
})




startGame()





function eatApple(){
    if(foodCoordinate == snakeCoordinates[0]){
        blocks[foodCoordinate].classList.remove('apple')
        drawFood()
        snakeGrowth()
    }
}
function snakeGrowth(){
    snakeCoordinates.push(snakeCoordinates[snakeCoordinates.length-1])
    console.log(snakeCoordinates)
}
function clearBoard(){
    interval = clearInterval(interval)
    blocks[foodCoordinate].classList.remove('apple')
    for (let i = 0; i < snakeCoordinates.length; i++) {
        blocks[snakeCoordinates[i]].classList.remove('snake')
        
    }
    snakeCoordinates = [12,11,10]
    direction = 1
}
function checkCollisions(){
    //check top wall
    //check bottom wall
    //check left wall



    
    //check right wall
    //if(snakeCoordinates[0] % sideBlocks == 9 && direction === 1){
    //    interval = clearInterval(interval)   
    //}

    //check top wall

    /*
    if(snakeCoordinates[0] > 10 && direction === -sideBlocks){
       interval = clearInterval(interval)
    }*/



    /*
    ||
    9  %  10 === 9
    19 %  10 === 9
    29 %  10 === 9

    */
    // snakes hits hitself
    for (let i = 1; i < snakeCoordinates.length; i++) {
        if(snakeCoordinates[0] === snakeCoordinates[i]){
            interval = clearInterval(interval)
        }
        
    }  

}

reset.addEventListener('click', (e) => {
    clearBoard()
    startGame()
})