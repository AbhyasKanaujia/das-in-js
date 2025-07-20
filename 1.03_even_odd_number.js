const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a number: "));

if (Number.isNaN(number) || !Number.isInteger(number)) {
  console.log(`${number} is not a valid integer`);
  process.exit(1);
}

console.log(`${number} is ${number % 2 ? "odd" : "even"}.`);
