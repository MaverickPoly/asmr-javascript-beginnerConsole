const prompt = require("prompt-sync")();

function factorialN(n) {
    if (n <= 1) return 1;
    return n * factorialN(n - 1);
}

function generateFactorial(n) {
    let result = [];
    for (let i = 1; i < n + 1; i++ ) {
        result.push(factorialN(i));
    }
    return result;
}


const n = parseInt(prompt("Enter number of factorial numbers to generate: "));
const result = generateFactorial(n);
console.log(result);

for (let el of result) {
    console.log(el);
}

