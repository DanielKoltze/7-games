const canvasElement = document.getElementById('canvas')
const canvas = canvasElement.getContext('2d')

const numberOfRowsAndColumns = 20
const canvasWidth = canvasElement.width = 600
const canvasHeight = canvasElement.height = 600
const blockWidth = canvasWidth/numberOfRowsAndColumns

let currentCell = null
let currentIndex = 0;
let stack = []

class Cell{
    constructor(columnNumber,rowNumber){
        this.columnNumber = columnNumber
        this.rowNumber = rowNumber
        this.thickness = blockWidth
        this.visited = false
        this.x = columnNumber * blockWidth
        this.y = rowNumber * blockWidth
        //fra top,højre,bund og venstre
        this.walls = [true,true,true,true]
        
    }
    draw(){


        

        //tegne grøn når vi har besøgt den
        if(this.visited === true){
            canvas.fillStyle = 'green'
            canvas.fillRect(this.x,this.y,this.thickness,this.thickness)
            canvas.stroke()
        }
        
        canvas.beginPath()
        //venstre
        if(this.walls[3]){
        canvas.moveTo(this.x, this.y)
        canvas.lineTo(this.x,this.y+this.thickness)
        }
        //oppe
        if(this.walls[0]){
        canvas.moveTo(this.x, this.y)
        canvas.lineTo(this.x+this.thickness,this.y)
        }
        //højre
        if(this.walls[1]){
        canvas.moveTo(this.x+this.thickness, this.y)
        canvas.lineTo(this.x+this.thickness,this.y+this.thickness)
        }
        //bunden
        if(this.walls[2]){
        canvas.moveTo(this.x,this.y+this.thickness)
        canvas.lineTo(this.x+this.thickness,this.y+this.thickness)
        }
        canvas.stroke();
        /*
        canvas.rect(this.x,this.y,this.thickness,this.thickness)
        canvas.stroke()
        */
    }

    getIndex(i,j){
        if(i < 0 || j < 0 || i > numberOfRowsAndColumns-1 || j > numberOfRowsAndColumns-1){
            return -1
        }
        return i + j * numberOfRowsAndColumns
    }

    getRandomNeighbor(){
        let neighbors = []

        let topWall = maze.grid[this.getIndex(this.columnNumber, this.rowNumber - 1)]
        let rightWall = maze.grid[this.getIndex(this.columnNumber + 1, this.rowNumber)]
        let bottomWall = maze.grid[this.getIndex(this.columnNumber, this.rowNumber + 1)]
        let leftWall = maze.grid[this.getIndex(this.columnNumber - 1, this.rowNumber)]

        if(topWall != undefined && !topWall.visited){
            neighbors.push(topWall)
        }
        if(rightWall != undefined && !rightWall.visited){
            neighbors.push(rightWall)
        }
        if(bottomWall != undefined && !bottomWall.visited){
            neighbors.push(bottomWall)
        }
        if(leftWall != undefined && !leftWall.visited){
            neighbors.push(leftWall)
        }

        //finder den random
        if(neighbors.length != 0){
            let number = Math.floor(Math.random() * neighbors.length);
            return neighbors[number]
        }else{
            return null
        }


    }




}


class Maze{
    constructor(cellRow,cellColumn){
        this.rows = cellRow
        this.columns = cellColumn
        this.grid = []
    }

    setup(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.grid.push(new Cell(j,i))
            }
        }
        currentCell = maze.grid[0]
        currentCell.visited = true
    }
}











const maze = new Maze(numberOfRowsAndColumns,numberOfRowsAndColumns)
maze.setup()






function updateCanvas(){
    canvas.fillStyle = 'lightblue'
    canvas.fillRect(0,0,canvasWidth,canvasHeight) 
    drawCells()
}

function drawCells(){

    

    
    maze.grid.forEach(cell => {
        cell.draw()
    })

    let neighbor = currentCell.getRandomNeighbor()

    

    
    if(neighbor != null){
        

        //1

        //2
        stack.push(currentCell)
        //3
        removeWall(currentCell,neighbor)
        //4
        currentCell = neighbor
        currentCell.visited = true
    }else if(stack.length != 0){
        const placeholder = stack.pop()
        currentCell = placeholder
        

    }
   
   
}




function removeWall(current,neighbor){
    const x = current.columnNumber-neighbor.columnNumber
    const y = current.rowNumber-neighbor.rowNumber
    if(x === -1){
        current.walls[1] = false
        neighbor.walls[3] = false
    }else if(x === 1){
        current.walls[3] = false
        neighbor.walls[1] = false
    }
    if(y === -1){
        current.walls[2] = false
        neighbor.walls[0] = false
    }else if(y === 1){
        current.walls[0] = false
        neighbor.walls[2] = false
    }
}


setInterval(updateCanvas,1)