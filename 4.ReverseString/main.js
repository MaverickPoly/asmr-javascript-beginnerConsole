const prompt = require("prompt-sync")();

function reverseString(string) {
    return string.split("").reverse().join("");
}

const string = prompt("Enter a string to reverse: ");
console.log(reverseString(string));
