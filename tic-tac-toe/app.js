const container = document.querySelector('.container')
const squares = document.querySelectorAll(".square")
const player = document.querySelector(".player")
let playersTurn = 2;
let players = [0,0,0,0,0,0,0,0,0]

let wins = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

squares.forEach(square => {
    square.addEventListener('click', f = (e) => {
        let img = document.createElement('img')
       
        if(player.innerHTML === '1'){
            player.innerHTML = '2'
            let id = parseInt(square.id)
            players[id] = 1
            img.src = 'image/cross.png'
            playersTurn = 1
        }else{
            player.innerHTML = '1'
            players[player.id] = 2
            let id = parseInt(square.id)
            players[id] = 2
            img.src = 'image/circle.png'
            playersTurn = 2
        }
        square.appendChild(img)
    
        if(checkWin()){
            let tekst = document.createElement('h1')
            tekst.innerHTML ='player ' + playersTurn + ' wins'
            container.appendChild(tekst)
            squares.forEach(square => {
                square.removeEventListener('click',f)
            })
        }
    }, {once:true})
})



function checkWin(){
    for (let i = 0; i < wins.length; i++) {
        let first = wins[i][0]
        let second = wins[i][1]
        let last = wins[i][2]
        //console.log(players[first] + ' ' + players[second] + ' ' + players[last])
        if(players[first] !== 0 && players[first] === players[second] && players[first] === players[last]){
            return true;
        }
    }
    
    return false;
}


