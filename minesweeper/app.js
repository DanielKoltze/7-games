const grid = document.getElementById('grid')
let width = 30;
let blockAmount = 400;
let bombAmount = 40;
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
        grid.appendChild(block)
    }
}





createBoard()
const blocksClick = document.querySelectorAll('.block')

    blocksClick.forEach(block => {
        block.addEventListener('click', (e) => {
            const classNames = e.target.classList
            
            if(classNames[1] === 'bomb' || gameisRunning === false){
                /*blocksClick.forEach(block => {
                    block.removeEventListener('click')
                })*/
                gameisRunning = false
                alert('You have hit a bomb')
            }else{

                checkSqaure(e)

                
            }
        })
    })
    function checkSqaure(e){
        let counter = 0;
                let index = e.target.classList[0]
                const blocks2 = document.querySelectorAll('.block')
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
                }
                
    }
