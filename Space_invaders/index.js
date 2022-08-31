const container = document.querySelector('.container')
const user = document.querySelector('.user')

const blockWidth = 100;
const blockHeight = 20;
let containerWidth = container.clientWidth
let containerHeight = container.clientHeight


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
    let userPositionString = user.style.left
    userPositionString = userPositionString.replace('px','')
    let userPosition = parseInt(userPositionString)
    if(e.key === 'ArrowRight' && userPosition+blockWidth < containerWidth){
        userPosition = userPosition + 12
        user.style.left = userPosition + 'px'
    }else if(e.key === 'ArrowLeft' && userPosition > 0){
        console.log('fds')
        userPosition = userPosition - 12
        user.style.left = userPosition + 'px'
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
        }
    }
}
function setWidthOfMap(width){
    container.style.width = width + 'px'
    containerWidth = container.clientWidth
}





let ballX = 290
let ballY = 40
let wayOfX = 3
let wayOfY = 3
let ballDiameter = 20
const ball = document.querySelector('.ball')


//ball

function drawBall(){
    ball.style.left = ballX + 'px'
    ball.style.bottom = ballY + 'px'
}
function moveBall(){
    ballX = ballX+wayOfX
    ballY = ballY+wayOfY
    drawBall()
    checkCollisionsWithWalls()
}
function checkCollisionsWithWalls(){
    /*if(ballX > containerWidth-25 || ballX > 0 || ballX > containerWidth-25 || ballX > 0){
        changeDirection()
    }*/
    if(ballX > containerWidth-25){
        wayOfX = -3
    }else if(ballY > containerHeight-25){
        wayOfY = -3
    }else if(ballX < 0){
        wayOfX = 3
    }else if(ballY < 0){
        wayOfY = 3
    }

}
function changeDirection(){

    
    
}

drawBall()
setInterval(moveBall,30)


//setWidthOfMap(600)
placeUserInMiddle()
amountOfBlocks(5)
createBlocks()


//fiks at der er en blcok ekstra
//at man kan skrive alt ind i funktiiner manuelt
//at user virker
// at man kan ramme boksene og de forsvinder