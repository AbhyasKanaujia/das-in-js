// Write a program to delete a number from a given location in an array.

const { runTests } = require('./runner');


// # Assumptions
// 1. location >= 1
// 2. out of index doesn't throw error, it just doens't delete anyting. 
// 3. If array is empty, then no deletion, in line with 2

function isOutOfBounds(nums, location) {
  return location > nums.length || location < 1;
}

function shift_delete(nums, location) {
  const nums_copy = [...nums];

  if(isOutOfBounds(nums, location))
    return nums_copy;

  for(let index = location - 1; index < nums.length - 1; index++) {
    nums_copy[index] = nums_copy[index + 1];
  }
  
  nums_copy.pop();
  return nums_copy;
}

function copy_array(nums, location) {
  if(isOutOfBounds(nums, location))
    return nums;

  const new_array = nums.slice(0, location - 1).concat(nums.slice(location, nums.length));
  return new_array;
}

function js_function(nums, location) {
  if(isOutOfBounds(nums, location))
    return nums;

  const nums_copy = nums.toSpliced(location - 1, 1);
  return nums_copy;
}

const tests = [
  { input: [[1, 2, 3, 4, 5], 3], output: [1, 2, 4, 5] },
  { input: [[1, 2, 3, 4, 5], 1], output: [2, 3, 4, 5] },
  { input: [[1, 2, 3, 4, 5], 5], output: [1, 2, 3, 4] },
  { input: [[1], 1], output: [] },
  { input: [[9], 5], output: [9] },
  { input: [[], 1], output: [] },
  { input: [[1, 2, 3], 10], output: [1, 2, 3] },
  { input: [[1, 2, 3], 0], output: [1, 2, 3] },
  { input: [[1, 2, 3], -1], output: [1, 2, 3] },
  { input: [[2, 2, 2, 2], 2], output: [2, 2, 2] },
  { input: [[1, 2, 2, 3], 3], output: [1, 2, 3] },
  { input: [['a', 'b', 'c'], 2], output: ['a', 'c'] },
  { input: [[true, false, true], 1], output: [false, true] },
  { input: [[], -100], output: [] },
  { input: [[], 100], output: [] },
  { input: [[1], 0], output: [1] },
  { input: [[1], 9999], output: [1] },
  { input: [[1, 2, 3, 4, 5], 0], output: [1, 2, 3, 4, 5] },
  { input: [[1, 2, 3, 4, 5], 6], output: [1, 2, 3, 4, 5] },
];

runTests(
  [shift_delete, copy_array, js_function], 
  tests);
