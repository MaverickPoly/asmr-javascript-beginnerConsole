const input = require("prompt-sync")();

const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    INR: 74.5
}

function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!rates[fromCurrency] || !rates[toCurrency]) {
        return "Invalid Currency!";
    }
    const amountInUSD = amount / rates[fromCurrency];
    return amountInUSD * rates[toCurrency];
}

console.log("Welcome to the currency Converter!");

const amount = parseFloat(input("Enter the amount to convert: "));
const fromCurrency = input("Enter the source currency (USD, EUR...): ").toUpperCase();
const toCurrency = input("Enter the target currency (USD, EUR...): ").toUpperCase();

const result = convertCurrency(amount, fromCurrency, toCurrency);

if (typeof result === "number") {
    console.log(`${amount} ${fromCurrency} is equal to ${result.toFixed(2)} ${toCurrency}`);
} else {
    console.log(result);
}
