// Write a program to print the position of the smallest number of n numbers using arrays.

const prompt = require('prompt-sync')();

const count = parseInt(prompt("How many elements?\n> "));

console.log(`Enter ${count} elements:\n`);
const nums = Array.from(
  {length: count},
  (_, i) => parseInt(prompt('> '))
)

const smallestNumber = nums.reduce((smallest, current, index) => {
  if(smallest.value > current) {
    smallest.value = current;
    smallest.index = index;
  }
  return smallest;
}, {value: Infinity, index: undefined});


console.log(`Position of the smallest number ${smallestNumber.value} is ${smallestNumber.index + 1}.`);

