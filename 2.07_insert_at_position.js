// Write a program to insert a number at a given location in an array.

const chalk = require('chalk');

// # Assumptions
// 1. Position is 1 indexed.
// 2. If position > size of current array, insert at the end

function shift_by_index(nums, location, value) {
  // larger location
  if(location > nums.length) {
    nums.push(value);
    return nums; 
  }
  // shift loop
  for(let index = nums.length; index >= location; index--)
    nums[index] = nums[index - 1];

  nums[location - 1] = value;
  return nums;
}

const tests = [
  {
    nums: [1, 2, 3],
    location: 1,
    value: 5,
    result: [5, 1, 2, 3]
  },

  {
    nums: [],
    location: 1,
    value: 5,
    result: [5]
  },
  {
    nums: [1, 2, 3],
    location: 10,
    value: 5,
    result: [1, 2, 3, 5]
  },
  {
    nums: [],
    location: 5,
    value: 5,
    result: [5]
  }
];

const functions = [shift_by_index]

function are_arrays_same(arr1, arr2){
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

for(const test of tests)
  for(const fn of functions) {
    const result = fn([...test.nums], test.location, test.value);
    const pass = are_arrays_same(test.result, result);
    const color = pass ? chalk.green : chalk.red;
    console.log(color(`${fn.name}: Insert ${test.value} at position ${test.location} in array ${test.nums}: ${result} ${pass && "[expected " + test.result + "]"}`));
  }

