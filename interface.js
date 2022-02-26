document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square")
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    let square = event.target
    let position = square.id
    if(handleMove(position)){
        if(playerTime == 0){
            setTimeout(() => {alert("O jogo acabou - O vencedor foi O")}, 10)
        }else{
            setTimeout(() => {alert("O jogo acabou - O vencedor foi X")}, 10)
        }
    }
    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML =`<div class='${symbol}'></div>`
}

function resetScreen(){
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) =>{
        square.innerHTML = ''
    })
}
