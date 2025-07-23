const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const mat2 = [
  [-9, -8, -7],
  [-6, -5, -4],
  [-3, -2, -1]
];

// Sum of matrix
const sum = [];
for(let i = 0; i < mat1.length; i++) {
  sum.push([]);
  for(let j = 0; j < mat1[i].length; j++) {
    sum[i].push(mat1[i][j] + mat2[i][j]);
  }
}

// Difference of matrix
const difference = [];
for(let i = 0; i < mat1.length; i++) {
  difference.push([]);
  for(let j = 0; j < mat1[i].length; j++) 
    difference[i].push(mat1[i][j] - mat2[i][j]);
}

console.table(mat1);
console.table(mat2);
console.log("Sum: ");
console.table(sum);
console.log("Difference: ");
console.table(difference);

