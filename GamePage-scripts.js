
// pseudocode
    // write the logic to get the computer choice
    // write the logic to get the human choice
    // declare the players score variables
    // write the logic to play a single round
    // write the logic to play the entire game (5 rounds)

let humanScore = 0;
let computerScore = 0;


function getRandom0to2() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let goose = getRandom0to2();
    let duck;
    if (goose === 0) {
        duck = "rock";
    } else if (goose === 1) {
        duck = "paper";
    } else {
        duck = "scissors";
    }
    return duck;
}

function getHumanChoice() {
    let goose = prompt("Type rock, paper or scissors. Good luck!");
    goose = goose.toLowerCase();
    if (goose !== "rock" && goose !== "paper" && goose !== "scissors") {
        alert("That's not one of the options ._.")
        return getHumanChoice();
    }
    return goose;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        alert("The rocks hit each other and... it's a draw!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("The paper overwhelms the rock and... you lose :(");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("The rock breaks the scissors in half and... you win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("The paper overwhelms the rock and... you win!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        alert("The papers slap each other and... it's a draw!");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("The scissors cut the paper in pieces and... you lose!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("The rock breaks the scissors in half and... you lose!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("The scissors cut the paper in pieces and... you win!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        alert("The two scissors hit each other and... it's a draw!")
    }
}

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
}

playGame();

function whoWon() {
    let winner;

    if (humanScore > computerScore) {
        winner = "YOU won!";
    } else if (humanScore < computerScore) {
        winner = "The PC won :(";
    } else {
        winner = "It's a draw!";
    }

    return winner;
}

alert("After 5 long battles... " + whoWon() + "\nYour score: " + humanScore + "\nThe PC' score: " + computerScore);