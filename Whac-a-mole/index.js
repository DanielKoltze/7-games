const divs = document.querySelectorAll('.square')
const timer = document.querySelector('#timer')
const score = document.querySelector('#score')
const button = document.querySelector('#start')
let time = 30;
let counter = 0;
let randomNumber
let isRunning = false

function shiftDiv(){
divs.forEach(div => {
    div.classList.remove('mole')
})
randomNumber = Math.floor(Math.random()*9)

divs[randomNumber].classList.add('mole')
/*divs[randomNumber].addEventListener('mousedown', () =>{
    counter++;
    score.innerHTML = counter
})*/
}

divs.forEach(div => {
    div.addEventListener('click', () => {
        if(div.id == randomNumber){
            counter++;
            score.innerHTML = counter
        }
    })
})
let shiftInterval;
let timeInterval;

button.addEventListener('click', () => {
    
    if(!isRunning){
        isRunning = true;
        button.innerHTML = 'stop'
    shiftInterval = setInterval(shiftDiv, 700)
    timeInterval = setInterval( () => {
        time--;
        timer.innerHTML = time;
        if(time === -1){
            clearInterval(shiftInterval)
            clearInterval(timeInterval)
            alert('gz your score was: ' + score.textContent)
            button.innerHTML = 'start'
        }
    }, 1000)
}else{
    isRunning = false
    button.innerHTML = 'start'
    clearInterval(shiftInterval)
    clearInterval(timeInterval)
}})