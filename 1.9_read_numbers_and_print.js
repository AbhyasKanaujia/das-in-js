// Write a program to read 10 integers. Display these numbers by printing three numbers in a line separated by commas.

const prompt = require("prompt-sync")();

numbers = [];

for (let i = 0; i < 10; i++) numbers.push(parseInt(prompt()));

let result = "";
for (let i = 0; i < 10; i += 3)
  result += numbers.slice(i, i + 3).join(", ") + "\n";

console.log(result);
