const container = document.querySelector('.container')
const user = document.querySelector('.user')

const blockWidth = 100;
const blockHeight = 20;
const containerWidth = container.clientWidth

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
    /*new Block(10,370),
    new Block(200, 250),
    new Block(300,10)*/
]
function amountOfBlocks(amount){
    let xAxis = 10;
    let yAxis = 370;
    for (let i = 0; i < amount; i++) {
        if(xAxis < containerWidth-blockWidth-10){
            blocks.push(new Block(xAxis,yAxis))
            xAxis = xAxis + 110;
        } else{
            xAxis = 10;
            yAxis = yAxis - 40
            blocks.push(new Block(xAxis,yAxis))
        }

    }
}

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
placeUserInMiddle()
amountOfBlocks(18)
createBlocks()

document.addEventListener('keydown', (e) => {
    let userPositionString = user.style.left
    userPositionString = userPositionString.replace('px','')
    let userPosition = parseInt(userPositionString)
    console.log(userPosition)
    if(e.key === 'ArrowRight'){
        userPosition=+2
        user.style.left = userPosition + 'px'
    }else{

    }
})

