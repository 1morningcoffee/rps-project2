let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let compOptions = ["rock", "paper", "scissors"];
    let randomSelection = Math.floor(Math.random() * compOptions.length);

    if (randomSelection === 0) {
        return "rock";
    } if (randomSelection === 1) {
        return "paper";
    } if (randomSelection === 2) {
        return "scissors";
    }
}

function playRound() {
    let compSelection = getComputerChoice();
    let playerInput = prompt("please choose rock, paper or scissors", "");
    let playerSelection = playerInput.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        let playerInput = alert("sorry this is an invalid input, try again")
        playRound();
        return;
    }

    if (playerSelection === compSelection) {
        alert("it is a tie! you both picked " + playerSelection + ".")
    } if (playerSelection === "rock" && compSelection === "paper") {
        alert("you lose! paper beats rock.")
        compScore++;
    } if (playerSelection === "rock" && compSelection === "scissors") {
        alert("you win! rock beats scissors!")
        playerScore++;
    } if (playerSelection === "paper" && compSelection === "rock") {
        alert("you win! paper beats rock.")
        playerScore++;
    } if (playerSelection === "paper" && compSelection === "scissors") {
        alert("you lose! scissors beat paper.")
        compScore++;
    } if (playerSelection === "scissors" && compSelection === "rock") {
        alert("you lose! rock beats scissors.")
        compScore++;
    } else if (playerSelection === "scissors" && compSelection === "paper") {
        alert("you win! scissors beat paper.")
        playerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    if (playerScore > compScore) {
        console.log("you win! the score was " + playerScore + " to " + compScore + ".");
    } if (compScore > playerScore) {
        console.log("you lose! the score was " + playerScore + " to " + compScore + ".");
    } else {
        console.log("it was a tie! you both scored " + playerScore + ".");
    }
}

console.log(game());