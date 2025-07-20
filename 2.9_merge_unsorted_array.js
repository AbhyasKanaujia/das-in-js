const { runTests } = require('./runner');

const tests = [
  {input: [[1, 2, 3,], [4, 5, 6]], output: [1, 2, 3, 4, 5, 6]},
  {input: [[], []], output: []},
  {input: [[], [1]], output: [1]},
  {input: [[1], []], output: [1]}
];

function create_new_array(arr1, arr2) {
  return [...arr1, ...arr2];
}

function jsFunction(arr1, arr2) {
  return arr1.concat(arr2);
}

runTests(
  [create_new_array, jsFunction],
  tests
};
