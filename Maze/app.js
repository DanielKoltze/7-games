const canvasWidth = 1000
const canvasHeight = 1000
const cellWidth = 200
const cellHeight = 200
const cellRow = 5
const cellColumn = 5
let mazeCanvas = document.querySelector('#canvas')
const cells = document.querySelectorAll('.cell')
const cellLength = cells.length



class Maze{
    constructor(){
        this.rows = cellRow
        this.columns = cellColumn
        this.grid = []
    }

    setup(){
        let idCounter = 0
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.grid.push(new Cell(j,i,idCounter))
                idCounter = idCounter + 1
            }
        }
    }
}


class Cell{
    constructor(col,row,id){
        this.id = id
        this.col = col
        this.row = row
        this.visited = false
        this.parent = null
        this.topWall = true
        this.bottomWall = true
        this.leftWall = true
        this.rightWall = true  
        this.setWalls()
    }

    //sætter walls så f.eks første mur ikke har left og top til true
    setWalls(){
        if(this.id < cellRow){
            this.topWall = false
        }else if(cells.length-cellRow <= this.id){
            this.bottomWall = false
        }
        //fjerner de cells som ikke har en rightWall
        if(this.id % cellColumn === 4){
            this.rightWall = false
            //samme gældende for venstre side
        }else if(this.id % cellColumn === 0){
            this.leftWall = false
        }
        
    }
    getRandomValidWall(){
        //Math.floor(Math.random() * 4)+1
        let list = [1,2,3,4]
        /*
        if(this.visited === true){
            return null
        }
        */
        for (let i = 0; i < 4; i++) {
            //shuffler vi og bruger pop på bagerste element. Hvis alle er false så retunerer true og så ved vi at vi skal tilbage til vores parent
            let shuffledList = list.sort((a, b) => 0.5 - Math.random());
            //definerer top som 1, right som 2 , bottom som 3 og left som 4
            switch(shuffledList[shuffledList.length-1]){
                case 1:
                    if(this.topWall === true){
                        return 'top'
                    }
                    shuffledList.pop()
                    break
                 case 2:
                    if(this.rightWall === true){
                        return 'right'
                    }
                    shuffledList.pop()
                    break
                 case 3:
                    if(this.bottomWall === true){
                        return 'bottom'
                    }
                    shuffledList.pop()
                    break
                 case 4:
                    if(this.leftWall === true){
                        return 'left'
                    }
                    shuffledList.pop()
                    break
                    
            }
            
        }
        return null
    }
}

let maze = new Maze()
maze.setup()



mazeRandomize()
function mazeRandomize(){
    
    let index = 0
    let wall
    let grid = maze.grid
    for (let i = 0; i < 50; i++) {
        //returnerer en valid tilfældig wall og hvis der ikke er en valid wall så vil der returnere null og gå til parent
        wall = grid[index].getRandomValidWall()
        if(wall !== null){
            
            if(wall === 'right' && grid[index + 1].visited === false){
                grid[index].visited = true
                //setAllWAllsToFalse(index,grid)
                grid[index].rightWall = false

                cells[index].style.borderRight = 'none'
                index = index + 1
                grid[index].parent = index - 1
                cells[index].style.borderLeft = 'none'
                grid[index].leftWall = false
          }else if(wall === 'bottom'  && grid[index + cellRow].visited === false){
                grid[index].visited = true
                //setAllWAllsToFalse(index,grid)
                grid[index].bottomWall = false

                cells[index].style.borderBottom = 'none'
                index = index + cellRow
                grid[index].parent = index - cellRow
                cells[index].style.borderTop = 'none'
                grid[index].topWall = false
          }else if(wall === 'top'  && grid[index - cellRow].visited === false){
                grid[index].visited = true
                //setAllWAllsToFalse(index,grid)
                grid[index].topWall = false

                cells[index].style.borderTop = 'none'
                index = index - cellRow
                grid[index].parent = index + cellRow
                cells[index].style.borderBottom = 'none'
                grid[index].bottomWall = false
         }else if(wall === 'left'  && grid[index - 1].visited === false){
                grid[index].visited = true
                //setAllWAllsToFalse(index,grid)
                grid[index].leftWall = false

                cells[index].style.borderLeft = 'none'
                index = index - 1
                grid[index].parent = index + 1
                cells[index].style.borderRight = 'none'
                grid[index].rightWall = false
      }
      
      
      
      
      
      else if(wall === 'left'){
        grid[index].leftWall = false
      }else if(wall === 'top'){
        grid[index].topWall = false
      }else if(wall === 'right'){
        grid[index].rightWall = false
      }else if(wall === 'bottom'){
        grid[index].bottomWall = false
      }





          
    }else{
        index = grid[index].parent
    }
        
        /*
        else if(wall === 'top'){
            cells[index].style.borderTop = 'none'
            index = index + cellRow
            cells[index].style.borderTop = 'none'
        }else if(wall === 'bottom'){
            cells[index].style.borderBottom = 'none'
            index = index + cellRow
            cells[index].style.borderTop = 'none'
        }
        */
       
       

    }
}

function setAllWAllsToFalse(index, list){
    
        list[index].bottomWall = false
        list[index].topWall = false
        list[index].leftWall = false
        list[index].rightWall = false
        
    
}

//cells[1].style.borderRight = 'none'

maze.grid.forEach( cell => {
    console.log(cell)
})