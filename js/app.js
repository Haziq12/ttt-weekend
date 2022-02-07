/*-------------------------------- Constants --------------------------------*/





/*---------------------------- Variables (state) ----------------------------*/
let squares = []
let turn
let isWinner


/*------------------------ Cached Element References ------------------------*/
const sq = document.querySelectorAll('.sq')
// console.log(sq)
const statusMessage = document.querySelector('#message')
// console.log(statusMessage)
const replayButton = document.getElementById('Replay')
// console.log(replayButton)

/*----------------------------- Event Listeners -----------------------------*/

sq.forEach(square => square.addEventListener('click', handleClick))
replayButton.addEventListener('click', replay)

/*-------------------------------- Functions --------------------------------*/
init()



function init(){
  squares = [null, null, null, null, null, null, null, null, null]
  turn = 1
  isWinner = null
  render()
}
 

  
  let  winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


function render(){
  for(i = 0; i < squares.length; i++){
    if(squares[i] === 1) {
      sq[i].textContent = 'X'
    } else if (squares[i] === -1){
      sq[i].textContent = 'O'
    } else sq[i].textContent = ''
  }

  if (!isWinner && turn === 1) {
    statusMessage.textContent = `X's turn!`
  } else if(!isWinner && turn === -1){
    statusMessage.textContent = `O, let's go!`
  } else if (isWinner === 1) {
    statusMessage.textContent = `X is the WINNER!`
  } else if (isWinner === -1) {
    statusMessage.textContent = `O is the WINNER!`
  } else if (isWinner === 'T') {
    statusMessage.textContent = `It's a TIE!`
  }
}



function handleClick(evt) {
    let clickedIndex = parseInt(evt.target.id)
    // console.log((clickedIndex))
    if (squares[clickedIndex] == 1 || squares[clickedIndex] == -1){
      return 
    } else if (isWinner !== null) {
      return
    }
    squares[clickedIndex] = turn
    turn = turn * -1
    
    render()
    getWinner()


  }



    function getWinner(){

      for(let i = 0; i < winningArrays.length; i++){
        const combo = winningArrays[i]
        // console.log(combo)
        const a = combo[0]
        const b = combo[1]
        const c = combo[2]
        // console.log(a)

        if(squares[a]+squares[b]+squares[c] === 3) {
          isWinner = 1
          render()
        } else if(Math.abs(squares[a]+squares[b]+squares[c]) === 3) {
          isWinner = -1
          render()
        } else if (isWinner != 1 && isWinner != -1 && (squares[0] && squares[1] && squares[2] && squares[3] && squares[4] && squares[5] && squares[6] && squares[7] && squares[8]) !== null){
          isWinner = 'T'
          render()
        }

      }

  }
    

  function replay(){
    init()
  }
   


