const prompt = require('prompt-sync')();

let fruits = ["apple", "mango", "orange"];
let nums = [1, 2, 3];
let empty = [];
let mixed = [2, "hello", true];
let arr = new Array(3); // [<3 empty items>]
let filled = new Array().fill(0); // [0, 0, 0];

console.log(fruits, nums, empty, mixed, arr, filled);
// Empty array print undefind when access and no value is assigned.
console.log(arr[1]);
// Length is 3 since we created as an array of size 3
console.log(arr.length);
// We assign a higher index than the current array size, but its ok, array gorws to accomodate. No error. 
arr[10] = 10;
// When printing 9 index is undefined while 10 index is 10
console.log(arr[9], arr[10]);
// Length of array becomes 11
console.log(arr.length);

console.log(arr.push(4)); // add to the end, returns the new size of array
console.log(arr.pop()); // remove from the end, return the popped value
console.log(arr.unshift()); // add to start, return the new size of the array
console.log(arr.shift()); // remove from start, return the shifted value. 

arr.includes(2); // true or false
arr.indexOf(2); // index or -1

for (let item of arr) {console.log(item);}

arr.forEach(item => console.log(item));

let doubled = arr.map(x => x * 2);
let evens = arr.filter(x => x % 2 === 0);
let total = arr.reduce((sum, x) => sum + x, 0);

arr.sort();
arr.reverse();

let last = arr[arr.length - 1];

let grid = [
  [1, 2],
  [3, 4]
];

let a = [1, 2];
let b = [...a, 3];

let [x, y] = a;
