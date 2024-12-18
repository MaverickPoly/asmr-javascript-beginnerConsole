const input = require("prompt-sync")();

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i < number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6
    }
    return true;
}


// const number = parseInt(input("Enter a number: "));
// const result = isPrime(number);
// console.log(`Number ${number} is ${result ? "Prime" : "Not prime"}`);

const numbers = [2, 3, 4, 7, 8, 9, 13, 11, 15, 17, 19, 21];

for (let number of numbers) {
    console.log(`Number ${number} is ${isPrime(number) ? "Prime" : "Not prime"}`);
}
