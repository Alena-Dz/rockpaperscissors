function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
    console.log(randomChoice);
    let computerChoice = choices[randomChoice];
    console.log(computerChoice)
}

getComputerChoice();
