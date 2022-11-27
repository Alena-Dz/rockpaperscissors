function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomChoice];
    console.log(computerChoice)
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerSelection == playerSelection){
        return "It's a draw.";
    } else if (playerSelection == "paper" && computerSelection == "rock" || 
               playerSelection == "rock" && computerSelection == "scissors" || 
               playerSelection == "scissors" && computerSelection == "paper") {
        return "Yay, you won!";
    } else {
        return "Sorry, you lose.";
    }
}

function game(){
    let playerScore = 0;
    let outcome;
    for (let i=0; i < 5; i++){
        outcome = playRound();
        console.log(outcome);
        if (outcome == "Yay, you won!"){
            playerScore += 1;
        }
        console.log(playerScore);
    }
    return playerScore;
}

game();