const input = require("prompt-sync")();

console.log("Welcome to this Number Guessing Game!");
console.log("You need to find a random number between 0 and 100\n")

while (true) {
    let randomNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    let guess;

    while (true) {
        guess = parseInt(input("Take a guess: "));
        console.log(guess);

        if (guess > randomNumber) {
            console.log("Too high!");
            attempts++;
        } else if (guess < randomNumber) {
            console.log("Too low!");
            attempts++;
        } else if(guess === randomNumber) {
            console.log("Correct!");
            break;
        } else {
            console.log("Invalid input!");
        }
        console.log();
    }

    console.log(`The correct answer was: ${randomNumber}`);
    console.log(`It took you ${attempts} attempts to find it!`);

    let again = input("Do you want to play again(y, n): ");
    if (again.toLowerCase() === "n") {
        break;
    }
    console.log();
}

console.log("Thanks for playing!");