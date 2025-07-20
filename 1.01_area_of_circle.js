const prompt = require("prompt-sync")();

const radius = prompt("Enter the radius of the circle: ");

const area = Math.PI * Math.pow(radius, 2);

console.log(
  `The area of the circle with radius ${radius} unit is: ${area.toFixed(
    2
  )} square units.`
);
