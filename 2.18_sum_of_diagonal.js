//  Write a program that reads a matrix and displays the sum of its diagonal elements.

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

let sumOfDiagonalElements = 0;
mat[0].forEach((_, index) => sumOfDiagonalElements += mat[index][index]);
console.log(sumOfDiagonalElements);

