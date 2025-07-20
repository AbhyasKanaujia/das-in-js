// Given the digits of the number from right to left print the full number
const chalk = require('chalk');

function digit_to_number_using_string(digits) {
    return parseInt(digits.reverse().join(""));
}

function 



tests = [
  {
    input: [1, 2, 3, 4],
    output: 4321
  }
];

functions = [digit_to_number_using_string];

for(let test of tests) {
    for(let fn of functions) {
        result = fn(test.input);
        color = result === test.output ? chalk.green : chalk.red 
	console.log(color(`Using ${fn.name} Input: ${test.input} Expected: ${test.output} Actual: ${result}`));
    }
}
