const { runTests } = require('./runner');

const tests = [
  { input: [[1, 3, 5], [2, 4, 6]], output: [1, 2, 3, 4, 5, 6] },
  { input: [[1, 2, 3], [4, 5, 6]], output: [1, 2, 3, 4, 5, 6] }
];

// Time complexity: O(nLog n)
// Space Complexity: O(n)
// n = m + n
function concat_and_sort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}


// Time complexity: O(m + n)
// Space complexity: O(m + n)
function selectively_merge(arr1, arr2) {
  const result = [];

  while(arr1.length && arr2.length) 
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  
  return result.concat([...arr1, ...arr2])
}

runTests(
  [concat_and_sort, selectively_merge],
  tests
);
