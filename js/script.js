/* Let the computer play a round. */

function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 3));
    let move = "";

    switch (randomNumber) {
        case 0:
            move = "rock";
            break;
        case 1:
            move = "paper";
            break;
        case 2:
            move = "scissors";
            break;
        default:
            move = "nothing";
            break;
    };

    return move;
};

/* Evaluate and display the scores. */

let playerCounter = 0;
let computerCounter = 0;

let playerDiv = document.querySelector(".player-counter");
let computerDiv = document.querySelector(".computer-counter");

playerDiv.textContent = `Player: ${playerCounter}`;
computerDiv.textContent = `Computer: ${computerCounter}`;

function updateScore(winner) {
    if (winner === "player") {
        playerCounter += 1;
    } else if (winner === "computer") {
        computerCounter += 1;
    };

    playerDiv.textContent = `Player: ${playerCounter}`;
    computerDiv.textContent = `Computer: ${computerCounter}`;

    if (playerCounter === 5 || computerCounter === 5) {
        declareGameWinner(winner);
    }
};

function declareGameWinner(winner) {
    alert(`${capitalize(winner)} wins the game!`);
}

/* Evaluate game result by comparing each possible combination of moves and display the result. */

function playRound(event) {
    let playerSelection = event.target.className;
    let computerSelection = computerPlay();
    let winner = "";

    if (playerSelection === computerSelection) {
        declareTie(playerSelection);
        winner = "none";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        declarePlayerAsWinner(playerSelection, computerSelection);
        winner = "player";
    } else {
        declareComputerAsWinner(playerSelection, computerSelection);
        winner = "computer";
    };

    updateScore(winner);
};

function declarePlayerAsWinner(playerSelection, computerSelection) {
    let div = document.querySelector(".result");
    div.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
};

function declareComputerAsWinner(playerSelection, computerSelection) {
    let div = document.querySelector(".result");
    div.textContent = `You loose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
};

function declareTie(playerSelection) {
    let div = document.querySelector(".result");
    div.textContent = `It is a tie! Both have ${capitalize(playerSelection)}.`;
};

function capitalize(selection) {
    return selection.replace(selection[0], selection[0].toUpperCase());
};

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));