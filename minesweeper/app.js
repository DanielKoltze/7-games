const grid = document.getElementById('grid')
let width = 30;
let blockAmount = 400;
let bombAmount = 60;
let blockPerLine = 20;
let blocks = Array.from({length: blockAmount-bombAmount}).fill('blank')
let gameisRunning = true
//create the board
function createBoard(){
    for (let i = 0; i < bombAmount; i++) {
      blocks.push('bomb')
    }
    blocks.sort(() => Math.random() - 0.5);

    

    for (let i = 0; i < blockAmount; i++) {
        const block = document.createElement('div')
        block.classList.add(i)
        block.classList.add(blocks[i]) //husk at ændre classname array
        block.classList.add('block')
        block.classList.add('notClicked')
        grid.appendChild(block)
    }
}





createBoard()
const blocksClick = document.querySelectorAll('.block')

    blocksClick.forEach(block => {
        block.addEventListener('click', (e) => {
            const classNames = e.target.classList
            if(gameisRunning === false){

            }else if(classNames.contains('flag')){

            }
            else if(classNames[1] === 'bomb'){
                /*blocksClick.forEach(block => {
                    block.removeEventListener('click')
                })*/
                gameisRunning = false
                const bombs = document.querySelectorAll('.bomb')
                /*blocksClick[e.target.classList[0]].classList.add('bum')*/
                bombs.forEach(bomb => {
                    bomb.innerHTML = '💣'
                })
                
            }else{
                let square = e.target
                checkSqaure(square)
            }
        })
    })
    function checkSqaure(square){
        let counter = 0;
        let index
        try {
            index = square.classList[0]
        } catch (error) {
            return
        }
                
                //check oppe
                if(blockPerLine <= index && blocksClick[index-blockPerLine].classList[1] === "bomb"){
                    counter++
                }
                //check nede
                if(blockAmount-blockPerLine-1 >= index && blocksClick[parseInt(index)+blockPerLine].classList[1] === "bomb"){
                    counter++
                }
                //checker venstre
                if(!(index % blockPerLine === 0) && blocksClick[index-1].classList[1] === "bomb"){
                    counter++
                }
                //checker højre
                if(!(index % blockPerLine === 19) && blocksClick[parseInt(index)+1].classList[1] === "bomb"){
                    counter++
                }
                //checker højre nede
                if(blockAmount-blockPerLine-1 >= index && !(index % blockPerLine === 19) && blocksClick[parseInt(index)+blockPerLine+1].classList[1] === "bomb"){
                    counter++
                }
                //checker højre oppe
                if(blockPerLine <= index && !(index % blockPerLine === 19) && blocksClick[parseInt(index)-blockPerLine+1].classList[1] === "bomb"){
                    counter++
                }
                //checker venstre oppe
                if(blockPerLine <= index && !(index % blockPerLine === 0) && blocksClick[parseInt(index)-blockPerLine-1].classList[1] === "bomb"){
                    counter++
                }
                //chcker venstre nede
                if(blockAmount-blockPerLine-1 >= index && !(index % blockPerLine === 0) && blocksClick[parseInt(index)+blockPerLine-1].classList[1] === "bomb"){
                    counter++
                }
                
                if(counter !== 0){
                    blocksClick[index].innerHTML = counter
                    blocksClick[index].classList.remove('notClicked')
                }else if(blocksClick[index].classList.contains('notClicked')){
                    blocksClick[index].classList.remove('notClicked')
                    setTimeout(() => {
                        if(!(index % blockPerLine === 19)){ 
                        checkSqaure(blocksClick[parseInt(index)+1])
                        }
                        if(!(index % blockPerLine === 0)){ 
                        checkSqaure(blocksClick[parseInt(index)-1])
                        }
                        checkSqaure(blocksClick[parseInt(index)+blockPerLine])
                        checkSqaure(blocksClick[parseInt(index)-blockPerLine])
                    
                    
                    },20)
                }
               
                
                
                
                //fjerne klassenavnet
                
    }


    blocksClick.forEach(block => {
            block.addEventListener('contextmenu', (e) => {
                if(e.target.classList.contains('flag')){
                    e.target.classList.remove('flag')
                    e.target.innerHTML = ''
                }else{
                e.target.classList.add('flag')
                e.target.innerHTML = '🚩'
                }
            })
    })
    

    document.addEventListener('contextmenu', event => event.preventDefault());