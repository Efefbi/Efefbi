let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
const compareGuesses = (humanGuess, computerGuess, target) => {
  let diffOfhumanGuess = Math.abs(target - humanGeuss);
  let diffOfcomputerGuess = Math.abs(target - computerGuess);
  // way to solve this 
    return diffOfhumanGuess <= diffOfcomputerGuess ;
  //another way to solve this is commented out below
  /*if(diffOfhumanGuess < diffOfhumanGuess){
    return true ;
} else if (diffOfhumanGuess > diffOfhumanGuess){
  return false ;
} else if (diffOfhumanGuess === diffOfhumanGuess){
  return true ;
} else {
  return ' draw '
}
*/
}
const updateScore = (winner) => {
  if ( winner === 'human'){
          humanScore += 1 ;
  } else if ( winner === 'computer'){
          computerScore += 1 ;
  } else {
    console.log( 'draw!');
  }

}
const advanceRound = () => currentRoundNumber ++;
  

/* updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);*/

