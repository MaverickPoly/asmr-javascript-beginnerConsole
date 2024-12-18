const prompt = require('prompt-sync')();

console.log("Welcome to this calculator program!");

function getNumbers() {
    let num1 = parseFloat(prompt("Enter number 1: "));
    let num2 = parseFloat(prompt("Enter number 2: "));
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter a number...");
    }
    return [num1, num2];
}


while (true) {
    console.log("1.Add\n2.Subtract\n3.Multiply\n4.Divide");
    let choice = parseInt(prompt("Choose an option: "));

    switch (choice) {
        case 1:
            [num1, num2] = getNumbers();
            result = num1 + num2;
            console.log(`Result: ${result}`);
            break;
        case 2:
            [num1, num2] = getNumbers();
            result = num1 - num2;
            console.log(`Result: ${result}`);
            break;
        case 3:
            [num1, num2] = getNumbers();
            result = num1 * num2;
            console.log(`Result: ${result}`);
            break;
        case 4:
            [num1, num2] = getNumbers();
            result = num1 / num2;
            console.log(`Result: ${result}`);
            break;
        default:
            console.log("Invalid option. Please try again...");
    }

    let again = prompt("Do you want to calculate again(y, n): ");
    if (again.toLowerCase() === "n") {
        break;
    }
}
