// Write a program to enter n number of digits. Form a number using these digits.

const prompt = require('prompt-sync')();

const digitCount = parseInt(prompt("Enter number of digits: "));

let number = 0;

console.log(`Enter ${digitCount} digits, one on each line:`);
for(let i = 0; i < digitCount; i++) {
  const digit = parseInt(prompt("> "));
  if(isNaN(digit) || digit > 9 || digit < 0) {
    console.error("Please only enter a single digit from 0 to 9");
    process.exit(1);
  }
  number = number * 10 + digit;
}


console.log(number);

