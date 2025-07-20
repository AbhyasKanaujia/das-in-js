// Write a program to find the second largest of n numbers using an array.

const prompt = require('prompt-sync')();

const count = parseInt(prompt("How many numbers?\n> "));

console.log(`Enter ${count} values:\n`);
const nums = Array.from(
  {length: count},
  (_, i) => parseInt(prompt("> "))
)

const largest_number = nums.reduce(
  (largest_number, current, index) => {
    if(largest_number.largest < current) {
      largest_number.secondLargest = largest_number.largest;
      largest_number.largest = current;
    } else if (largest_number.largest > current && largest_number.secondLargest < current) {
      largest_number.secondLargest = current;
    }
    return largest_number;
  }, 
  {largest: -Infinity, secondLargest: -Infinity}
);

console.log(largest_number);
console.log(`Second largest number: ${largest_number.secondLargest}`);

