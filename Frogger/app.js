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
        if(i === 115){
            element.classList.add('frog')
        }
        container.appendChild(element);
        
    }
   
}

createMap()
const blocks = document.querySelectorAll('.block')

document.addEventListener('keyup', e => {
    console.log(e.key)
    blocks[frogIndex].classList.remove('frog')
    if(e.key === 'ArrowDown'){
        frogIndex = frogIndex + 11
    }else if(e.key === 'ArrowUp'){
        frogIndex = frogIndex - 11
    }else if(e.key === 'ArrowLeft'){
        frogIndex = frogIndex - 1
    }else if(e.key === 'ArrowRight'){
        frogIndex = frogIndex + 1
    }
    blocks[frogIndex].classList.add('frog')
})