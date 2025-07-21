// Write a program to interchange the largest and the smallest number in an array.

const { runTests } = require('./runner');

tests = [
  { input: [[9, 6, 3, 5]], output: [3, 6, 9, 5] },
  { input: [[1, 1, 1, 1]], output: [1, 1, 1, 1] },
  { input: [[1]], output: [1] },
  { input: [[]], output: [] },
  {
    input: [[5, 5, 5, 1, 5, 9, 5]],
    output: [5, 5, 5, 9, 5, 1, 5] 
  },
  {
    input: [[-5, -1, -9, -3]],
    output: [-5, -9, -1, -3] // min = -9, max = -1; swapped index 2 and 1
  },
  {
    input: [[1, 3, 1, 3, 1, 3]],
    output: [3, 1, 1, 3, 1, 3] // min = 1 at 0, max = 3 at 1
  },
  {
    input: [[0, -100, 100, 50]],
    output: [0, 100, -100, 50] // min = -100 at 1, max = 100 at 2
  },
  {
    input: [[42, 42, 42]],
    output: [42, 42, 42] // all same, nothing to swap
  },
  {
    input: [[1, 100, 100, 1]],
    output: [100, 1, 100, 1] // first 1 (min) and first 100 (max) swapped
  },
  {
    input: [[100, 1, 100, 1]],
    output: [1, 100, 100, 1] // first 100 and first 1 swapped
  }
];

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function usingReducer(arr) {
  const arrayClone = [...arr];

  if(arrayClone.length === 0 || Math.min(arrayClone) === Math.max(arrayClone)) 
    return arrayClone;

  const smallestIndex = arrayClone.reduce((smallestIndex, value, index) => value < arrayClone[smallestIndex] ? index : smallestIndex, 0);

  const largestIndex = arrayClone.reduce((largestIndex, value, index) => value > arrayClone[largestIndex] ? index : largestIndex, 0);

  swap(arrayClone, smallestIndex, largestIndex);
  return arrayClone;
}

runTests(
  [usingReducer],
  tests
);
