const prompt = require("prompt-sync")();

function reverseString(string) {
    return string.split("").reverse().join("");
}

// METHOD 1
// Comparing the string with its reversed version
function isPalindrome(string) {
    return string === reverseString(string);
}

// METHOD 2
// Using a loop
function isPalindromeLoop(string) {
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const text = prompt("Enter a string: ");

console.log(`Is palindrome: ${isPalindrome(text)}`);
console.log(`Is palindrome: ${isPalindromeLoop(text)}`);
