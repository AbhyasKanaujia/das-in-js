// Write a program to find whether the array of integers contains a duplicate number


// Assumptions, only int data type inputs are being provided
const chalk = require('chalk');
const prompt = require('prompt-sync')();

// Time complexity O(n^2)
// Space complexity O(1)
function has_duplicate_brute_force(nums) {
  for(let x = 0; x < nums.length; x++) 
    for(let y = x + 1; y < nums.length; y++)
      if(nums[x] === nums[y]) return true;

  return false;
}

// Not in place
// Time complexity O(nLog(n))
// Space commplexity O(n);
function has_duplicate_using_sorting(nums) {
  const sorted_nums = nums.toSorted();
  for (let index = 0; index < sorted_nums.length - 1; index++) {
    if (sorted_nums[index] === sorted_nums[index + 1]) return true;
  }
  return false;
}

// Time complexity O(n)
// Space complexity O(n)
function has_duplicate_using_set(nums) {
  const set_of_nums = new Set(nums);
  return set_of_nums.size !== nums.length;
}

const tests = [
  { input: [1, 2, 3, 4, 1], output: true },
  { input: [1, 2, 3], output: false },
  { input: [1], output: false },
  { input: [], output: false }
];

const functions = [has_duplicate_brute_force, has_duplicate_using_sorting, has_duplicate_using_set];

for (const test of tests) {
  for (const fn of functions) {
    const result = fn(test.input);
    const color = result === test.output ? chalk.green : chalk.red;
    console.log(color(`${fn.name}(${test.input}) = ${result}`));
  }
}

