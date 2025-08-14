// Program to transpose a matrix

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transposedMatrix = JSON.parse(JSON.stringify(matrix));

for(let row = 0; row < transposedMatrix.length; row++)
  for(let col = row + 1; col < transposedMatrix[row].length; col++)
    [transposedMatrix[row][col], transposedMatrix[col][row]] = [transposedMatrix[col][row], transposedMatrix[row][col]];

console.table(transposedMatrix);

const transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));

console.table(transposed);
