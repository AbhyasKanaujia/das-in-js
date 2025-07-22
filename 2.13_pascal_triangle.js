// Pascal Triangle

const prompt = require('prompt-sync')();

const rows = parseInt(prompt("How many rows of pascal trianlge to print: "));

const matrix = Array.from({ length: rows }, (_, row) => Array.from({ length: row + 1 }, () => 0));


for(let row = 0; row < rows; row++) {
  matrix[row][0] = 1;
  for(let col = 1; col <= row; col++) {
    matrix[row][col] = (matrix[row - 1]?.[col - 1] || 0) + (matrix[row - 1]?.[col] || 0);
  }
}

console.table(matrix);
