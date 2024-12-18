const prompt = require('prompt-sync')();

function getRandomInt(min, max, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(min + Math.floor(Math.random() * (max - min)));
    }
    return result;
}

const min = parseInt(prompt("Enter the minimum boundary: "));
const max = parseInt(prompt("Enter the maximum boundary: "));
const n = parseInt(prompt("Enter the amount of random numbers: "));
console.log(min, max, n);
const random = getRandomInt(min, max, n);
console.log(random);

for (let el of random) {
    console.log(el);
}
