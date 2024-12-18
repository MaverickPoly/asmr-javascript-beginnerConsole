const prompt = require("prompt-sync")();

function fibonacciN(n) {
    if (n <= 2) return 1;
    return fibonacciN(n - 2) + fibonacciN(n - 1);
}

function generateFibonacci(n) {
    let result = [];
    for (let i = 1; i < n + 1; i++) {
        result.push(fibonacciN(i));
    }
    return result;
}

const n = parseInt(prompt("Enter fibonacci number: "));
const result = generateFibonacci(n);
console.log(result);

for (let el of result) {
    console.log(el);
}
