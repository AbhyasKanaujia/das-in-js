// if number divisible by 2 then even else odd
const prompt = require("prompt-sync")();
const chalk = require("chalk");

const n = prompt("Enter a number: ");

const isEven = (n) => n % 2 == 0;

if (isEven(n)) console.log(chalk.green(`${n} is even`));
else console.log(chalk.yellow(`${n} is odd.`));
