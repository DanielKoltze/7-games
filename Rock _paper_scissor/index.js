const possibleChoices = document.querySelectorAll('button')

const displayComputerChoice = document.getElementById('computer-choice')
const displayYourChoice = document.getElementById('your-choice')
const result = document.getElementById('result')

const displayWinCounter = document.getElementById('wins')
const displaylossCounter = document.getElementById('loses')

let userChoice;
let computerChoice;

let winCounter = 0;
let lossCounter = 0;

possibleChoices.forEach(item => {
    item.addEventListener('click', (e) => {
        userChoice = displayYourChoice.innerHTML = e.target.id
        generateComputerChoice();
        getResult();

    })
})

let generateComputerChoice = () => {
    let tal = Math.floor(Math.random() * possibleChoices.length)

    computerChoice = displayComputerChoice.innerHTML = possibleChoices[tal].id;
}


let getResult = () => {
    if(userChoice === 'rock' && computerChoice === 'rock'){
        result.innerHTML = 'its a draw';
    }
    if(userChoice === 'paper' && computerChoice === 'paper'){
        result.innerHTML = 'its a draw';
    }
    if(userChoice === 'scissors' && computerChoice === 'scissors'){
        result.innerHTML = 'its a draw';
    }
    if(userChoice === 'rock' && computerChoice === 'scissors'){
        result.innerHTML = 'You won';
        winCounter++;
    }
    if(userChoice === 'scissors' && computerChoice === 'paper'){
        result.innerHTML = 'You won';
        winCounter++;
    }
    if(userChoice === 'paper' && computerChoice === 'rock'){
        result.innerHTML = 'You won';
        winCounter++;
    }
    if(userChoice === 'rock' && computerChoice === 'paper'){
        result.innerHTML = 'You lost';
        lossCounter++;
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        result.innerHTML = 'You lost';
        lossCounter++;
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        result.innerHTML = 'You lost';
        lossCounter++;
    }
    displayWinCounter.innerHTML = winCounter;
    displaylossCounter.innerHTML = lossCounter;

}