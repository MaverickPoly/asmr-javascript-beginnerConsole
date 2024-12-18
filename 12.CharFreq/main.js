const input = require("prompt-sync")();



const calculateCharFrequencies = function (string) {
    let result = {};
    for (let i = 0; i < string.length - 1; i++) {
        let currentChar = string[i];
        if (currentChar in result) {
            result[currentChar]++;
        } else {
            result[currentChar] = 1;
        }
    }
    return result;
}

const string = input("Enter a string: ");
const result = calculateCharFrequencies(string);
console.log(result);

