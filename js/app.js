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
  //3.2.3 Initialize the winner variable to null.
	// This represents that there is no winner or tie yet. 
	// The winner variable will hold the player value (1 or -1) if there's a winner. 
	// The winner will hold a 'T' if there's a tie. */
 

  
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

  // If winner has a value other than null (game still in progress), render whose turn it 

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


// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	//** */ 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

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
  
    // console.log(squares[clickedIndex])
    // console.log(winningArrays)
    
    render()
    getWinner()


  }




// 5.2) If the board has a value at the index, immediately return because that square is already taken.
// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

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



        // if(squares[a]===1 && squares[b]===1 && squares[c]===1){
        //   isWinner = 1
        //   render()

        //   // console.log(isWinner)
          
        // } else if(squares[a]===-1 && squares[b]===-1 && squares[c]===-1){
        //   isWinner = -1
        //   render()
        // } 
        // else if(squares[0] && squares[1] && squares[2] && squares[3] && squares[4] && squares[5] && squares[6] && squares[7] && squares[8] !== ) { 
        //   isWinner = 'T'
        //   render()
        // }
      }
    


// 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.


          // for(let i = 0; i < winningArrays.length; i++){
      //   for(let j = 0; j < winningArrays[i].length; j++){
      //     if(winningArrays[i][j] === 1 || winningArrays[i][j] === -1){
      //       console.log(winningArrays[i][j])
      //     }
      //   }
      // }


function replay(){
  init()
}
 