const prompt = require("prompt-sync")();

const intNumber = prompt("Enter an integer: ");

if (isNaN(intNumber) || !Number.isInteger(Number(intNumber))) {
  console.log("Please enter a valid integer.");
  exit(1);
}

const floatNumber = parseFloat(intNumber);

console.log(
  `The float representation of the integer ${intNumber} is: ${floatNumber.toFixed(2)}`
);