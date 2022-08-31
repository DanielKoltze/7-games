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
        if(i > 10 && i < 22){
            element.classList.add('w1')
            if(i===11){element.classList.add('w1')}
            if(i===12){element.classList.add('w2')}
            if(i===13){element.classList.add('w2')}
            
           
           
        }

            
        if(i === 115){
            element.classList.add('frog')
        }       
        container.appendChild(element); 
        }

        
    }
   





function moveCar(size, startingIndex, endingIndex){
    for (let index = 0; index < endingIndex; index++) {
       
       
       
        
    }
   

   
   
   
   
}
moveCar(2,5,10)
createMap()
const blocks = document.querySelectorAll('.block')

document.addEventListener('keyup', e => {
    
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
    
})


