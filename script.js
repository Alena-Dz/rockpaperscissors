function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    console.log(randomChoice);
    let computerChoice = choices[randomChoice];
    console.log(computerChoice)
    return computerChoice;
}

function playerVsComputer (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerSelection == playerSelection){
        document.write("It's a draw!");
    } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper") {
        document.write("Yay, you won!");
    } else {
        document.write("Sorry, you lose :(");
    }
}

playerVsComputer();
