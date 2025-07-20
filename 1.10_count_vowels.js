// Write a program to count the number of vowels in a text.

const prompt = require("prompt-sync")();
const chalk = require("chalk");

const text = prompt("Enter a text: ");

const matches = text.match(/[aeiou]/gi);
const vowelCount = matches ? matches.length : 0;
console.log(chalk.green(`"${text}" contains ${vowelCount} vowels.`));
