const prompt = require("prompt-sync")();

const n = prompt("Enter the value of n: ");

if (n < 1) {
  console.error(`${n} is not a natural number. Enter a number ≥ 1.`);
  process.exit(1);
}

average = (n - 1) / 2;
console.log(`Average of first ${n} natural numbers is: ${average}`);
