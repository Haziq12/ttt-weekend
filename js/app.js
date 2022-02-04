/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares = []
let turn
let isWinner


/*------------------------ Cached Element References ------------------------*/
const sq = document.querySelectorAll('.sq')

const statusMessage = document.querySelector('#message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  squares = [null, null, null, null, null, null, null, null, null]
  turn = 1
  isWinner = null
  render()
}

function render(){
  for(i = 0; i < squares.length; i++){
    if(squares[i] === 1){
      squares[i].style = 'blue'
    } else if(squares[i] === -1 ){
      squares[i].stlye === 'red'
    } else if (squares[i] === null) {
      squares[i].stlye = 'green'
    }
  }
  
}