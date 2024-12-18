const input = require("prompt-sync")();


const countWord = (string) => {
    return string.split(" ").length;
}


const string = input("Enter a string to count its words: ");
const count = countWord(string);
console.log(count);

