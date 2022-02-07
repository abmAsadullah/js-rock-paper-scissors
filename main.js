function computerPlay(rand) {
    rand = Math.floor((Math.random() * 3) + 1);
    if(rand == 1) return "Rock";
    else if(rand == 2) return "Paper";
    else return "Scissor";
}

// computerSelection = computerPlay();
// console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "Rock" && computerSelection == "Paper")
        return "You Loss. Paper bit Rock"
    if(playerSelection == "Rock" && computerSelection == "Scissor")
        return "You Win. Rock bit Seassor"
    if(playerSelection == "Rock" && computerSelection == "Rock")
        return "Ty game. Rock bit Rock"
} 

let x = "Rock";
let y = computerPlay();
// console.log(y);
console.log(playRound(x, y));