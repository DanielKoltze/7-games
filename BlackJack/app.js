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
        dealerCard2.classList.add('move')
        dealerContainer.appendChild(dealerCard2)
    },1800)
    setTimeout(hit,2600)
    setTimeout(hit,4300)
    dealButton.removeEventListener('click',initialize)
    resetButton.removeEventListener('click',reset)
   
    
}

function hitDealer(){
    let backCard = document.createElement('img')
    backCard.src = 'back_of_cards.png'
    backCard.classList.add('back')
    backCard.classList.add('move')
    dealerContainer.appendChild(backCard)
    setTimeout(() => {
        backCard.classList.remove('move')
        backCard.classList.add('rotate1')
    },800)


    setTimeout(() => {
        backCard.parentNode.removeChild(backCard)
        let dealerCard = document.createElement('img')
        let card = createRandomCard()
        dealerHand.push(card)
        dealerCard.src = card.imgString
        dealerCard.classList.add('rotate2')
        dealerCard.classList.add("card")
        dealerContainer.appendChild(dealerCard)
        dealerSum.innerHTML = calculateSum(dealerHand)
        },1300)
        
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
    let backCard = document.createElement('img')
    backCard.src = 'back_of_cards.png'
    backCard.classList.add('back')
    backCard.classList.add('move')
    playerContainer.appendChild(backCard)
    setTimeout(() => {
        backCard.classList.remove('move')
        backCard.classList.add('rotate1')
    },800)
    setTimeout(() => {
    backCard.parentNode.removeChild(backCard)
    let playerCard = document.createElement('img')
    let card = createRandomCard()
    playerHand.push(card)
    playerCard.src = card.imgString
    playerCard.classList.add('rotate2')
    playerCard.classList.add("card")
    playerContainer.appendChild(playerCard)
    
    let sum = calculateSum(playerHand)

        /*if(playerHand.length === 2 && calculateSum(playerHand) === 21){
            console.log('blackjack')
        }*/

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
},1300)
}
function initializeNew(){
    gameIsRunning = false
    dealerHand = []
    playerHand = []
    playerSum.innerHTML = ''
    dealerSum.innerHTML = ''
    const allCards = document.querySelectorAll('.card')
    const back = document.querySelectorAll('.back')
    for (let i = 0; i < back.length; i++) {
        back[i].parentNode.removeChild(back[i])
    }
      for (let i = 0; i < allCards.length; i++) {
       allCards[i].parentNode.removeChild(allCards[i])
      }
    dealButton.addEventListener('click',initialize)
    setButtons()

}

function youLost(){
    playerSum.innerHTML = 'you lost'
    betMoney.textContent = 0 
}

function youWon(){
    playerSum.innerHTML = 'you won'
    amountOfMoney.innerHTML = parseInt(amountOfMoney.textContent) + (parseInt(betMoney.textContent))*2
    betMoney.textContent = 0 
}
function tie(){
    playerSum.innerHTML = 'tie'
    amountOfMoney.innerHTML = parseInt(amountOfMoney.textContent) + parseInt(betMoney.textContent)
    betMoney.textContent = 0 
}


function stand(){
    const back = document.querySelector('.back')
    back.classList.add('rotate1')
    setTimeout(()=>{
        back.parentNode.removeChild(back)
        let dealerCard = document.createElement('img')
        let card = createRandomCard()
        dealerHand.push(card)
        dealerCard.src = card.imgString
        dealerCard.classList.add('rotate2')
        dealerCard.classList.add("card")
        dealerSum.innerHTML = calculateSum(dealerHand)
        dealerContainer.appendChild(dealerCard)
    },500)
    setTimeout(()=>{
        // kan ikke løses i et loop




       for (let i = 0; i < 4; i++) {
           setTimeout(()=>{
            console.log('hej')
            if(parseInt(dealerSum.textContent) < 17){
                hitDealer()
            }

           },1500*i)
        
       }
    
    },1300)
    setTimeout(() => {

        if(parseInt(playerSum.textContent) === parseInt(dealerSum.textContent)){
            console.log('uafgjort')
            tie()
        } else if(parseInt(dealerSum.textContent) > 21 || parseInt(playerSum.textContent) > parseInt(dealerSum.textContent)){
            console.log('vundet')
            youWon()
        }else{
            console.log('tabte')
            youLost()
        }

        
    },7300)
    setTimeout(initializeNew,11300)
    

    //setTimeout(hitDealer,1000)
    
}