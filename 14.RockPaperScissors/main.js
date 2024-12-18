const input = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * choices.length);
    return choices[randomInt];
}


function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }

    if ((player === "rock" && computer === "paper") || (player === "paper" && computer === "scissors") || (player === "scissors" && computer === "rock")) {
        return "You lost!";
    } else {
        return "You won!";
    }
}

console.log("Welcome to this rock paper Scissors Game!");
let isPlaying = true;

while (isPlaying) {
    let player = input("Enter rock paper or scissors: ");

    if (!choices.includes(player)) {
        console.log("Invalid option. Please try again!\n");
        continue;
    }
    let computer = getComputerChoice();
    console.log(`You: ${player}`);
    console.log(`Computer: ${computer}`);

    let result = determineWinner(player, computer);
    console.log(result);

    let again = input("Do you want to play again(y, n)? ");
    isPlaying = again.toLowerCase() !== "n";
    console.log();
}

console.log("Thanks for playing!");
