const grid = document.getElementById('grid')
const list = ['Pictures/balbasaur','Pictures/caterpie','Pictures/charmander','Pictures/pidgey','Pictures/squirtle','Pictures/weedle']
let clickedlist = [];
let counter = 0;
const cards = [
    {
        'numberInArray':null,
        'id': 0,
        'link': 'Pictures/balbasaur.png'
    },
    {
        'numberInArray':null,
        'id': 0,
        'link': 'Pictures/balbasaur.png'
    },
    {
        'numberInArray':null,
        'id': 1,
        'link': 'Pictures/charmander.png'
    },
    {
        'numberInArray':null,
        'id': 1,
        'link': 'Pictures/charmander.png'
    },
    {
        'numberInArray':null,
        'id': 2,
        'link': 'Pictures/squirtle.png'
    },
    {
        'numberInArray':null,
        'id': 2,
        'link': 'Pictures/squirtle.png'
    },
    {
        'numberInArray':null,
        'id': 3,
        'link': 'Pictures/caterpie.png'
    },
    {
        'numberInArray':null,
        'id': 3,
        'link': 'Pictures/caterpie.png'
    },
    {
        'numberInArray':null,
        'id': 4,
        'link': 'Pictures/pidgey.png'
    },
    {
        'numberInArray':null,
        'id': 4,
        'link': 'Pictures/pidgey.png'
    },
    {
        'numberInArray':null,
        'id': 5,
        'link': 'Pictures/weedle.png'
    },
    {
        'numberInArray':null,
        'id': 5,
        'link': 'Pictures/weedle.png'
    }
]


makeBoard();
//shuffles board
const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());

//Creates board
function makeBoard(){
for (let index = 0; index < cards.length; index++) {
    let img = document.createElement('img')
    img.setAttribute('src','Pictures/front.jpeg')
    img.setAttribute('data-id', index);
    grid.appendChild(img)
    img.addEventListener('click', flipcard)
    
    }
}

function flipcard(){
    let data = this.getAttribute('data-id')
    let card = {link:cards[data].link, id:cards[data].id, data:data}
    clickedlist.push(card)
    this.setAttribute('src',cards[data].link)

    if(clickedlist.length === 2){
        
        const element1 = document.querySelector('[data-id="' + clickedlist[0].data + '"]')
        const element2 = document.querySelector('[data-id="' + clickedlist[1].data + '"]')
        
        setTimeout( () => {
            if(clickedlist[0].id === clickedlist[1].id){
                counter++;
                element1.setAttribute('src','Pictures/white.png');
                element2.setAttribute('src','Pictures/white.png');
                element1.removeEventListener('click', flipcard);
                element2.removeEventListener('click',flipcard);
            }else{
                element1.setAttribute('src','Pictures/front.jpeg');
                element2.setAttribute('src','Pictures/front.jpeg');
            }  
            if(counter === cards.length/2){
                refreshBoard();
                counter = 0;
            }
            clickedlist = [];
        },800)
        
        
        
    }
}

//removes all elements and creates a new board
function refreshBoard(){
    cards.sort((a, b) => 0.5 - Math.random())
    const allImg = document.querySelectorAll('img')
    for (let index = 0; index < allImg.length; index++) {
       allImg[index].parentNode.removeChild(allImg[index])
       
    }
    makeBoard();
}