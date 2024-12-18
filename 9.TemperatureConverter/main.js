const prompt = require("prompt-sync")();

function fahrToCel(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
}

function celToFahr(temp) {
    return (temp * 9 / 5 + 32).toFixed(1);
}

while (true) {
    console.log("1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit");
    let option = parseInt(prompt("Select an option: "));
    let result;

    switch (option) {
        case 1:
            let fahrenheit = parseFloat(prompt("Enter a temperature in fahrenheit: "));
            result = fahrToCel(fahrenheit);
            console.log(`${fahrenheit} fahrenheit = ${result} celsius`);
            break;
        case 2:
            let celsius = parseFloat(prompt("Enter a temperature in celsius: "));
            result = celToFahr(celsius);
            console.log(`${celsius} celsius = ${result} fahrenheit`);
            break;
        default:
            console.log("Invalid option, please try again...");
    }



    let again = prompt("Do you want to calculate again(y, n): ");
    if (again.toLowerCase() === "n") {
        break;
    }
    console.log();
}

