// Write a program that reads an array of 100 integers. Display all the pairs of elements whose sum is 50.

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const arr = Array.from({ length: 100 }, () => randomInt(-100, 100));

console.log(arr);

const fiftySumPair = [];

arr.forEach((firstTerm, index) => 
  arr.slice(index + 1).forEach(secondTerm => {
    if(firstTerm + secondTerm === 50) {
      fiftySumPair.push([firstTerm, secondTerm]);
    }
  })
);

console.log(fiftySumPair);

fiftySumPair.length = 0;

