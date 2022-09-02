const container = document.querySelector('.container')



let amountOfBLocks = 121
let frogIndex = 115;
const width = 11;


function createMap(){
    for (let i = 0; i < amountOfBLocks; i++) {
        let element = document.createElement('div')
        element.className = 'block'
        if(i === 5){
            element.classList.add('end')
        }
        
            if(i===33|| i===22){element.classList.add('w1')}
            if(i===34|| i===23){element.classList.add('w2')}
            if(i===35|| i===24){element.classList.add('w3')}
            if(i===36|| i===25){element.classList.add('w1')}
            if(i===37|| i===26){element.classList.add('w2')}
            if(i===38|| i===27){element.classList.add('w3')}
            if(i===39|| i===28){element.classList.add('w1')}
            if(i===40|| i===29){element.classList.add('w2')}
            if(i===41|| i===30){element.classList.add('w3')}
            if(i===42|| i===31){element.classList.add('w1')}
            if(i===43|| i===32){element.classList.add('w2')}
           
            if(i===66|| i===77){element.classList.add('c1')}
            if(i===67|| i===78){element.classList.add('c3')}
            if(i===68|| i===79){element.classList.add('c2')}
            if(i===69|| i===80){element.classList.add('c1')}
            if(i===70|| i===81){element.classList.add('c3')}
            if(i===71|| i===82){element.classList.add('c2')}
            if(i===72|| i===83){element.classList.add('c1')}
            if(i===73|| i===84){element.classList.add('c3')}
            if(i===74|| i===85){element.classList.add('c2')}
            if(i===75|| i===86){element.classList.add('c1')}
            if(i===76|| i===87){element.classList.add('c3')}    

            
        if(i === 115){
            element.classList.add('frog')
        }       
        container.appendChild(element); 
        }

        
    }
   

    function checkCollision(){
        const newBLocks = document.querySelectorAll('.block')
        for (let i = 0; i < newBLocks.length; i++) {
            if((newBLocks[i].classList.contains('c3')|| newBLocks[i].classList.contains('w3')) && i === frogIndex){
                startGame(false)
            }
            /*if(newBLocks[i].classList.contains('start') && i === frogIndex){
                alert('you won')
            }*/
        }
            
                        
        
    }


    let right
    let left 
    let colission

function startGame(isTrue){
    if(isTrue){
    createMap()
    right = setInterval(moveRight,200)
    left = setInterval(moveLeft,300)
    colission = setInterval(checkCollision,100)
    }else{
    clearInterval(right)
    clearInterval(left)
    clearInterval(colission)
    document.removeEventListener('keyup',moveFrog)
    }
}






function moveRight(){
    const newBLocks = document.querySelectorAll('.block')
    newBLocks.forEach(block => {
        if(block.classList.contains('w1')){
            block.classList.remove('w1')
            block.classList.add('w2')
        }
        else if(block.classList.contains('w2')){
            block.classList.remove('w2')
            block.classList.add('w3')
        }
        else if(block.classList.contains('w3')){
            block.classList.remove('w3')
            block.classList.add('w1')
        }
    })
 
}
function moveLeft(){
    const newBLocks = document.querySelectorAll('.block')
    newBLocks.forEach(block => {
        if(block.classList.contains('c1')){
            block.classList.remove('c1')
            block.classList.add('c2')
        }
        else if(block.classList.contains('c2')){
            block.classList.remove('c2')
            block.classList.add('c3')
        }
        else if(block.classList.contains('c3')){
            block.classList.remove('c3')
            block.classList.add('c1')
        }
    })
 
}

document.addEventListener('keyup', moveFrog)

function moveFrog(e){
    const blocks = document.querySelectorAll('.block')
    if(e.key === 'ArrowDown'){
        if(frogIndex > amountOfBLocks-width-1){
            return
        }
        blocks[frogIndex].classList.remove('frog')
        frogIndex = frogIndex + 11
        blocks[frogIndex].classList.add('frog')
    }else if(e.key === 'ArrowUp'){
        if(frogIndex < width){
            return
        }
        blocks[frogIndex].classList.remove('frog')
        frogIndex = frogIndex - 11
        blocks[frogIndex].classList.add('frog')
    }else if(e.key === 'ArrowLeft'){
        if(frogIndex%width == 0){
            return
        }
        blocks[frogIndex].classList.remove('frog')
        frogIndex = frogIndex - 1
        blocks[frogIndex].classList.add('frog')
    }else if(e.key === 'ArrowRight'){
        if(frogIndex%width == 10){
            return
        }
        blocks[frogIndex].classList.remove('frog')
        frogIndex = frogIndex + 1
        blocks[frogIndex].classList.add('frog')
    }
    
}







startGame(true)