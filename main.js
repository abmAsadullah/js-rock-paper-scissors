function computerPlay(rand) {
    rand = Math.floor((Math.random() * 3) + 1);
    if(rand == 1) {
        return "Rock";
    }
    else if(rand == 2)
        return "Paper";
    else
        return "Scissor";
}

computerSelection = computerPlay();
// console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    // your code here!
  }