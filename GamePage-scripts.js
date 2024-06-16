
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

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
    roundCounter++;
    updateScores();
    checkRoundCounter();
}

// Function to check the value of the roundCounter and perform actions
function checkRoundCounter() {
    if (roundCounter >= 5) {
        alert("Game Over! You've played 5 rounds and...");
        if (humanScore > computerScore) {
            alert("YOU WON! Humanity thanks you.");
        } else if (humanScore < computerScore) {
            alert("The PC won... RIP.");
        } else {
            alert("It's a draw! Go again!");
        }
        // You can reset the counter or perform any other action you need here
        roundCounter = 0; // Resetting the counter
        computerScore = 0;
        humanScore = 0;
        updateScores();
    }
}

// update scores after each round
function updateScores() {
    const humanScoreElement = document.querySelector("#humanScoreID");
    humanScoreElement.innerHTML = `Your Score: ${humanScore}`;
    const computerScoreElement = document.querySelector("#computerScoreID");
    computerScoreElement.innerHTML = `Computer Score: ${computerScore}`;
}

// playRound when button Rock is clicked
const refRockButton = document.querySelector("#rockButton");
refRockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

// playRound when button Paper is clicked
const refPaperButton = document.querySelector("#paperButton");
refPaperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

// playRound when button Scissors is clicked
const refScissorsButton = document.querySelector("#scissorsButton");
refScissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

// insert human score
const scoreList = document.querySelector("#scoreList");
const listHumanScore = document.createElement("li");
listHumanScore.id = "humanScoreID"; // Set an id to update the score later
listHumanScore.innerHTML = `Your Score: ${humanScore}`;
scoreList.appendChild(listHumanScore);

// insert computer score
const listComputerScore = document.createElement("li");
listComputerScore.id = "computerScoreID"; // Set an id to update the score later
listComputerScore.innerHTML = `Computer Score: ${computerScore}`;
scoreList.appendChild(listComputerScore);

/*    
Add a div for displaying results
Display the running score
announce a winner of the game once 5 points are reached.
*/