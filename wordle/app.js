
let row = document.querySelectorAll('.col1')
let currentWord;
let guess = []
let currentCol = 0
let rowNumber = 1;
const reset = document.getElementById('reset')

async function fetchingWord(){
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=5')
    const data = await response.json();
    return data
}
findWord()

async function findWord(){
    fetchingWord().then(word => {
        currentWord = word
    })
}

document.addEventListener('keydown' , (e) => {
   //console.log(e.key)
   console.log(currentWord)
   if(rowNumber < 6){
    if(e.key.length === 1 && guess.length < 5){ // ||
        const h1 = document.createElement('h1')
        h1.innerHTML = e.key
        row[currentCol].append(h1)
        currentCol++
        guess.push(e.key)
    }
    if(e.key === 'Backspace' && currentCol !== 0){
        row[currentCol-1].innerHTML = ''
        currentCol--
        guess.pop()
    }
    if(e.key === 'Enter' && currentCol === 5){
        
            checkWord()
        
        
        
    }
}
    console.log(guess)
})


function checkWord(){
    let wordArray = String(currentWord).split('')
    for (let i = 0; i < wordArray.length; i++) {
        row[i].classList.add('grey')
        
    }

    for (let i = 0; i < wordArray.length; i++) {
       for (let j = 0; j < wordArray.length; j++) {
        if(wordArray[i] === guess[j]){
            row[j].classList.add('yellow')
            row[j].classList.remove('grey')
        }
       }
    }


    for (let i = 0; i < wordArray.length; i++) {
       if(wordArray[i] === guess[i]){
        row[i].classList.add('green')
        row[i].classList.remove('yellow')
        row[i].classList.remove('grey')
       }
    }
    rowNumber++
    let string = '.col' + rowNumber
    console.log(string)
    row = document.querySelectorAll(string)
    guess = []
    currentCol = 0
}


reset.addEventListener('click', (e) => {
    const divs = document.querySelectorAll('.col1,.col2,.col3,.col4,.col5')
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove('yellow')
        divs[i].classList.remove('grey')
        divs[i].classList.remove('green')
        divs[i].innerHTML = ''
    }
    findWord()
    guess = []
    currentCol = 0
    rowNumber = 1;
    row = document.querySelectorAll('.col1')
})