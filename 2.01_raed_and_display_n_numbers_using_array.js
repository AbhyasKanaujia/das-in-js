const prompt = require('prompt-sync')();

const size = parseInt(prompt("How many elements?\n> "));

const nums = Array.from(
  {length: size},
  (_, i) => prompt(`Enter value (${i + 1}/${size}): `)
)

nums.forEach(num => console.log(num));

