// Write a program to find the mean of n numbers using arrays.

const prompt = require('prompt-sync')();

const count = parseInt(prompt("How many elements?\n> "));

const nums = Array.from(
  {length: count},
  (_, i) => parseFloat(prompt(`Value ${i + 1}: `))
)

const sum = nums.reduce((sum, value) => sum + value, 0);
const average = sum / count;

console.log(`Average of ${nums} is ${average}`);

