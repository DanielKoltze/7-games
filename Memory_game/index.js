const grid = document.getElementById('grid')
const list = ['Pictures/balbasaur','Pictures/caterpie','Pictures/charmander','Pictures/pidgey','Pictures/squirtle','Pictures/weedle']


const cards = [
    {
        'numberInArray':null,
        'id': 0,
        'link': 'Pictures/balbasaur'
    },
    {
        'numberInArray':null,
        'id': 0,
        'link': 'Pictures/balbasaur'
    },
    {
        'numberInArray':null,
        'id': 1,
        'link': 'Pictures/charmander'
    },
    {
        'numberInArray':null,
        'id': 1,
        'link': 'Pictures/charmander'
    },
    {
        'numberInArray':null,
        'id': 2,
        'link': 'Pictures/squirtle'
    },
    {
        'numberInArray':null,
        'id': 2,
        'link': 'Pictures/squirtle'
    },
    {
        'numberInArray':null,
        'id': 3,
        'link': 'Pictures/caterpie'
    },
    {
        'numberInArray':null,
        'id': 3,
        'link': 'Pictures/caterpie'
    },
    {
        'numberInArray':null,
        'id': 4,
        'link': 'Pictures/pidgey'
    },
    {
        'numberInArray':null,
        'id': 4,
        'link': 'Pictures/pidgey'
    },
    {
        'numberInArray':null,
        'id': 5,
        'link': 'Pictures/weedle'
    },
    {
        'numberInArray':null,
        'id': 5,
        'link': 'Pictures/weedle'
    }
]

const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());


for (let index = 0; index < cards.length; index++) {
    let img = document.createElement('img')
    img.src = 'Pictures/front.jpeg'
    img.id = index;
    grid.appendChild(img)
    cards[index].numberInArray = index
}


const imgTags = document.querySelectorAll('img')
console.log(imgTags)


imgTags.forEach(img => {
    img.addEventListener('click', (e) => {
        console.log(e)
     
    })
})