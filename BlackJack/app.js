const dealerContainer = document.querySelector('.dealer')
const playerContainer = document.querySelector('.player')
const startButton = document.querySelector('.start')
const startContainer = document.querySelector('.startContainer')
const gameContainer = document.querySelector('.container')
const playerSum = document.querySelector('.playerSum')
const dealerSum = document.querySelector('.dealerSum')
const dealButton = document.querySelector('.deal')
const hitButton = document.querySelector('.hit')
const standButton = document.querySelector('.stand')

const amountOfMoney = document.querySelector('.moneyText')
const betMoney = document.querySelector('.circleText')
const betButtons = document.querySelectorAll('.chip')
const resetButton = document.querySelector('.resetButton')

let gameIsRunning = false;


    for (let i = 0; i < betButtons.length; i++) {
        betButtons[i].addEventListener('click',bet = (e) => {
            if(parseInt(amountOfMoney.textContent)-listOfBets[i] >= 0 && gameIsRunning === false){
                let amountOfMoneyPlaceholder = parseInt(amountOfMoney.textContent) - listOfBets[i]
                let betMoneyPlaceholder = parseInt(betMoney.textContent) + listOfBets[i]
                amountOfMoney.innerHTML = amountOfMoneyPlaceholder
                betMoney.innerHTML = betMoneyPlaceholder
               
            }
        
        
    })
}


let dealerHand = []
let playerHand = []
const listOfBets = [1,5,10,25,50,100]
function setButtons(){
    dealButton.addEventListener('click',initialize)


    resetButton.addEventListener('click',reset = (e) => {
        amountOfMoney.innerHTML = parseInt(amountOfMoney.textContent) + parseInt(betMoney.textContent)
        betMoney.innerHTML = 0
    })
}
setButtons()

class Card{
    constructor(imgString,number,type){
        this.imgString = imgString
        this.number = number
        this.type = type
    }
}

function createRandomCard(){
    let cardNumber = Math.floor(Math.random()*13)+1
    let cardType = Math.floor(Math.random()*4)+1
    let stringPng = "" //images/PNG-cards-1.3/
    switch(cardNumber){
        case 1:
            stringPng = stringPng + "ace"
            cardNumber = 11
            break
        case 11:
            stringPng = stringPng + "jack"
            cardNumber = 10
            break
        case 12:
            stringPng = stringPng + "queen"
            cardNumber = 10
            break
        case 13: 
            stringPng = stringPng + "king"
            cardNumber = 10
            break
        default:
            stringPng = cardNumber
            break
    }
    switch(cardType){
        case 1:
            stringPng = stringPng + "_of_hearts.png"
            break
        case 2:
            stringPng = stringPng + "_of_spades.png"
            break
        case 3:
            stringPng = stringPng + "_of_clubs.png"
            break
        case 4:
            stringPng = stringPng + "_of_diamonds.png"
            break
    }
    
    return new Card(stringPng,cardNumber,cardType)
}


startButton.addEventListener('click', e => {
    startContainer.style.display = 'none'
    gameContainer.style.display = 'block'
    
})


function initialize(){
   
    playerSum.innerHTML = 0
    dealerSum.innerHTML = 0
    gameIsRunning = true
    
    hitButton.addEventListener('click',hit)
    standButton.addEventListener('click',stand)
    hitDealer()
    setTimeout(() => {
        let dealerCard2 = document.createElement('img')
        dealerCard2.src = "back_of_cards.png"
        dealerCard2.classList.add('back')
        dealerContainer.appendChild(dealerCard2)
    },1000)
    setTimeout(hit,2000)
    setTimeout(hit,3000)
    dealButton.removeEventListener('click',initialize)
    resetButton.removeEventListener('click',reset)
   
        betButtons[0].removeEventListener('click',bet)
        betButtons[1].removeEventListener('click',bet)
        betButtons[2].removeEventListener('click',bet)
        betButtons[3].removeEventListener('click',bet)
        betButtons[4].removeEventListener('click',bet)
        betButtons[5].removeEventListener('click',bet)
        
    
}

function hitDealer(){
    let dealerCard = document.createElement('img')
    let card = createRandomCard()
    dealerHand.push(card)
    dealerCard.src = card.imgString
    dealerCard.classList.add("card")
    dealerContainer.appendChild(dealerCard)
    dealerSum.innerHTML = calculateSum(dealerHand)
}


function calculateSum(array){
    let sum = 0
    let esCounter = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i].number
        if(array[i].number == 11){
            esCounter = esCounter + 1
        }
    }
    if(esCounter > 0 && sum > 21){
        for (let i = 0; i < esCounter; i++) {
            sum = sum - 10
            if(sum <= 21){
                console.log(sum)
                return sum
            }
            
        }
    }
    return sum
}


calculateSum(playerHand)

function hit(e){
    let playerCard = document.createElement('img')
    let card = createRandomCard()
    playerHand.push(card)
    playerCard.src = card.imgString
    playerCard.classList.add("card")
    playerContainer.appendChild(playerCard)
    let sum = calculateSum(playerHand)
    if(sum > 21){
        playerSum.innerHTML = "busted"
        hitButton.removeEventListener('click',hit)
        standButton.removeEventListener('click',hit)
        youLost()
        setTimeout(initializeNew,4000)
        //dealButton.addEventListener('click',initializeNew)
        //setTimeout(initializeNew,4000)
    }else{
        playerSum.innerHTML = sum
    }
}
function initializeNew(){
    gameIsRunning = false
    dealerHand = []
    playerHand = []
    playerSum.innerHTML = ''
    dealerSum.innerHTML = ''
    const allCards = document.querySelectorAll('.card')
    const back = document.querySelector('.back')
    back.parentNode.removeChild(back)
      for (let i = 0; i < allCards.length; i++) {
       allCards[i].parentNode.removeChild(allCards[i])
      }
    dealButton.addEventListener('click',initialize)
    setButtons()

}

function youLost(){
    betMoney.textContent = 0 
}


function stand(){
    const back = document.querySelector('.back')
    back.classList.add('rotate')
    //back.style.transform = 'rotatey(-90deg)'
    setTimeout(()=>{
        back.parentNode.removeChild(back)
    },1000)
    setTimeout(hitDealer,1000)
    
}

