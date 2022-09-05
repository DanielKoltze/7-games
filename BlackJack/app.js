const dealerContainer = document.querySelector('.dealer')
const playerContainer = document.querySelector('.player')
const startButton = document.querySelector('.start')
const startContainer = document.querySelector('.startContainer')
const gameContainer = document.querySelector('.container')
const playerSum = document.querySelector('.playerSum')
const dealerSum = document.querySelector('.dealerSum')


let dealerHand = []
let playerHand = []



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
    for (let i = 0; i < 2; i++) {
        let playerCard = document.createElement('img')
        let card = createRandomCard()
        playerHand.push(card)
        playerCard.src = card.imgString
        playerCard.classList.add("card")
        playerContainer.appendChild(playerCard)
    }
    let dealerCard1 = document.createElement('img')
    let dealerCard2 = document.createElement('img')
    let card = createRandomCard()
    dealerHand.push(card)
    dealerCard1.src = card.imgString
    dealerCard1.classList.add("card")
    dealerContainer.appendChild(dealerCard1)
    dealerCard2.src = "back_of_cards.png"
    dealerCard2.classList.add('back')
    dealerContainer.appendChild(dealerCard2)
    dealerSum.innerHTML = calculateSum(dealerHand)
    playerSum.innerHTML = calculateSum(playerHand)

}


function calculateSum(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i].number
    }
    console.log(sum)
    return sum
}

initialize()
calculateSum(playerHand)

