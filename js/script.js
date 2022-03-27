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
    let winner = "";

    if (playerMove === "rock" && computerMove === "rock") {
        declareTie(playerMove);
        winner = "none";
    } else if (playerMove === "rock" && computerMove === "paper") {
        declareComputerAsWinner(playerMove, computerMove);
        winner = "computer";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        declarePlayerAsWinner(playerMove, computerMove);
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        declarePlayerAsWinner(playerMove, computerMove);
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "paper") {
        declareTie(playerMove);
        winner = "none";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        declareComputerAsWinner(playerMove, computerMove);
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        declareComputerAsWinner(playerMove, computerMove);
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        declarePlayerAsWinner(playerMove, computerMove);
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        declareTie(playerMove);
        winner = "none";
    };

    return winner;
};

function declarePlayerAsWinner(playerMove, computerMove) {
    console.log(`You win! ${makeUppercase(playerMove)} beats ${makeUppercase(computerMove)}.`);
};

function declareComputerAsWinner(playerMove, computerMove) {
    console.log(`You loose! ${makeUppercase(computerMove)} beats ${makeUppercase(playerMove)}.`);
};

function declareTie(playerMove) {
    console.log(`It is a tie! Both have ${makeUppercase(playerMove)}.`);
};

function makeUppercase(move) {
    return move.replace(move[0], move[0].toUpperCase());
};

// Play five rounds and keep score of each round. Declare overall winner.

function game() {
    let counterPlayer = 0;
    let counterComputer = 0;
    let counterTies = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Which move do you want to play?");
        let winner = playRound(playerSelection, computerPlay());

        if (winner === "player") {
            counterPlayer++;
        } else if (winner === "computer") {
            counterComputer++;
        } else {
            counterTies++;
        };
    };
    
    if (counterPlayer > counterComputer) {
        console.log(`You have won ${counterPlayer} out of 5 rounds including ${counterTies} ties. Therefore you are the winner!`);
    } else if (counterPlayer < counterComputer) {
        console.log(`You have lost ${counterComputer} out of 5 rounds including ${counterTies} ties. Therefore you are the loser!`);
    } else {
        console.log(`Both have won ${counterPlayer} times including ${counterTies} ties. Therefore nobody wins!`);
    }
}

game();