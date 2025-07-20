// Write a program to read a floating point number.
// Display the rightmost digit of the integral part of
// the number.

const prompt = require("prompt-sync")();
const chalk = require("chalk");

const input = parseFloat(prompt("Enter a decimal number: "));

if (!/\d+[\.\d+]/.test(input)) {
  console.error("Input is not a proper decimal number.");
  process.exit(1);
}

const integer_part = input.toFixed(0);

const last_digit = integer_part % 10;

console.log(chalk.green(`Last digit of the integer part is: ${last_digit}.`));
