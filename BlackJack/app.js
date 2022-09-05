const dealerContainer = document.querySelector('.dealer')
const playerContainer = document.querySelector('.player')

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
    let stringPng = "images/PNG-cards-1.3/"
    switch(cardNumber){
        case 1:
            stringPng = stringPng + "ace"
            break
        case 11:
            stringPng = stringPng + "jack"
            break
        case 12:
            stringPng = stringPng + "queen"
            break
        case 13: 
            stringPng = stringPng + "king"
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







function initialize(){
    for (let i = 0; i < 2; i++) {
        let playerCard = document.createElement('img')
        let card = createRandomCard()
        playerHand.push(card)
        playerCard.src = card.imgString
        playerContainer.appendChild(playerCard)
    }

}
console.log(playerContainer)
initialize()