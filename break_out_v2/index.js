const container = document.querySelector('.container')
const user = document.querySelector('.user')

const blockWidth = 100;
const blockHeight = 20;
let containerWidth = container.clientWidth
let containerHeight = container.clientHeight

let userPositionString = user.style.left
userPositionString = userPositionString.replace('px','')
let userPosition = parseInt(userPositionString)


class Block{
    constructor(x,y){
        this.leftButtom = [x,y]
        this.rightButtom = [x+blockWidth,y]
        this.leftTop = [x, y+blockHeight]
        this.rightTop = [x+blockWidth,y+blockHeight]
        this.x = x;
        this.y = y;
    }
}

//her kan jeg lave map
let blocks = [
]

function placeUserInMiddle(){
    user.style.left = (containerWidth/2)-(blockWidth/2) + 'px'
}

function createBlocks(){
    blocks.forEach(block => {
        let blockDiv = document.createElement('div')
        blockDiv.classList.add('block')
        blockDiv.style.left = block.x + 'px'
        blockDiv.style.bottom = block.y + 'px'
        container.appendChild(blockDiv)
    })
}

document.addEventListener('keydown', (e) => {
    let userPositionString2 = user.style.left
    userPositionString2 = userPositionString2.replace('px','')
    let userPosition2 = parseInt(userPositionString2)

    if(e.key === 'ArrowRight' && userPosition2+blockWidth < containerWidth){
        userPosition2 = userPosition2 + 15
        user.style.left = userPosition2 + 'px'
    }else if(e.key === 'ArrowLeft' && userPosition2 > 0){
        userPosition2 = userPosition2 - 15
        user.style.left = userPosition2 + 'px'
    }
})


function amountOfBlocks(amount){
    //for at finde resten så jeg ved hvor første boks skal være
    let xAxis = (containerWidth%110)/2;
    let yAxis = 370;
    
    for (let i = 0; i < amount; i++) {
        if(xAxis < containerWidth-blockWidth-10){
            blocks.push(new Block(xAxis,yAxis))
            xAxis = xAxis + 110;
        } else{
            xAxis = (containerWidth%110)/2;
            yAxis = yAxis - 30
            blocks.push(new Block(xAxis,yAxis))
            xAxis = xAxis + 110;
        }
    }
}
function setWidthOfMap(width){
    container.style.width = width + 'px'
    containerWidth = container.clientWidth
}
 





let balls = []

function createBall(xPlace){
    let newBall = document.createElement("div")
    newBall.classList.add("ball")
    newBall.style.left = xPlace + 'px'
    newBall.style.bottom = 50 + 'px'
    container.appendChild(newBall)
    balls.push(newBall)
    //Math.floor(Math.random)*580 
}

let wayOfX = 2
let wayOfY = 2

/*

let ballX = 290
let ballY = 40
let ballDiameter = 20
const ball = document.querySelector('.ball')
*/

//ball

function drawBall(ball){
    let xPlaceholder =  ball.style.left
    let xPlaceholder2 = xPlaceholder.replace('px','')
    let x = parseInt(xPlaceholder2)
    let yPlaceholder =  ball.style.bottom
    let yPlaceholder2 = xPlaceholder.replace('px','')
    let y = parseInt(yPlaceholder2)
    x = x + wayOfX
    y = y + wayOfY
    ball.style.left = x + 'px'
    ball.style.bottom = y + 'px'
    checkCollisionsWithWalls(x,y)
}

function checkCollisionsWithWalls(ballX,ballY){
    /*if(ballX > containerWidth-25 || ballX > 0 || ballX > containerWidth-25 || ballX > 0){
        changeDirection()
    }*/
    let userPositionString = user.style.left
    userPositionString = userPositionString.replace('px','')
    let userPosition = parseInt(userPositionString)
    let userPositionY = 30
    if(ballX > containerWidth-20){
        wayOfX = -2/*
    }else if(ballY > containerHeight-20){
        wayOfY = -2
    }else if(ballX < 0){
        wayOfX = 2

        //checker bunden
    }else if(ballY < 0){
        clearInterval(interval)
        //checker user
    }else if(userPositionY === ballY && userPosition < ballX && userPosition+blockWidth > ballX){
        wayOfY = 2
    }
    //checker de forskellige blocks
    let counter = 0;
    let allBlocks = Array.from(document.querySelectorAll('.block'))
    for (let i = 0; i < blocks.length; i++) {
        if(blocks[i].y === ballY+20 && blocks[i].x < ballX && blocks[i].x+blockWidth > ballX){
            allBlocks[i].classList.remove('block')
            
            wayOfY = -2
            blocks.splice(i,1)
        }
        */
    }   

}


function organizeBalls(){
    balls.forEach(ball => {
        drawBall(ball)
    })
}

createBall(100)
console.log(balls)
setInterval(organizeBalls,50)


//let interval = setInterval(moveBall,20)


//setWidthOfMap(600)
placeUserInMiddle()
amountOfBlocks(20)
createBlocks()

//fiks at der er en blcok ekstra
//at man kan skrive alt ind i funktiiner manuelt
//at user virker
// at man kan ramme boksene og de forsvinder



