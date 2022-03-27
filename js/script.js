// Computer randomly selects rock, paper or scissors.
// Create random number that maps to one of the play moves.
// Store move in variable and return it.

function computerPlay() {
    let randomNumber = Math.floor((Math.random() * 3));
    let move = "";

    switch (randomNumber) {
        case 0:
            move = "Rock";
            break;
        case 1:
            move = "Paper";
            break;
        case 2:
            move = "Scissors";
            break;
        default:
            move = "I do not feel like playing.";
            break;
    };

    return move;
};

// Evaluate game result by comparing each possible combination of moves.
// Declare the winner.

function playRound(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase();
    let computerMove = computerSelection.toLowerCase();
    let result = "";

    if (playerMove === "rock" && computerMove === "rock") {
        result = declareTie(playerMove);
    } else if (playerMove === "rock" && computerMove === "paper") {
        result = declareComputerAsWinner(playerMove, computerMove);
    } else if (playerMove === "rock" && computerMove === "scissors") {
        result = declarePlayerAsWinner(playerMove, computerMove);
    } else if (playerMove === "paper" && computerMove === "rock") {
        result = declarePlayerAsWinner(playerMove, computerMove);
    } else if (playerMove === "paper" && computerMove === "paper") {
        result = declareTie(playerMove);
    } else if (playerMove === "paper" && computerMove === "scissors") {
        result = declareComputerAsWinner(playerMove, computerMove);
    } else if (playerMove === "scissors" && computerMove === "rock") {
        result = declareComputerAsWinner(playerMove, computerMove);
    } else if (playerMove === "scissors" && computerMove === "paper") {
        result = declarePlayerAsWinner(playerMove, computerMove);
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        result = declareTie(playerMove);
    };

    return result;
};

function declarePlayerAsWinner(playerMove, computerMove) {
    return `You win! ${makeUppercase(playerMove)} beats ${makeUppercase(computerMove)}.`;
};

function declareComputerAsWinner(playerMove, computerMove) {
    return `You loose! ${makeUppercase(computerMove)} beats ${makeUppercase(playerMove)}.`;
};

function declareTie(playerMove) {
    return `It is a tie! Both have ${makeUppercase(playerMove)}.`;
};

function makeUppercase(move) {
    return move.replace(move[0], move[0].toUpperCase());
};

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));