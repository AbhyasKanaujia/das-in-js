// runner.js

const chalk = require('chalk');

// Optional deep comparison for arrays and objects
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// Shorten long outputs to keep logs readable
function shorten(value, maxLen = 200) {
  const str = JSON.stringify(value);
  return str.length <= maxLen ? str : str.slice(0, maxLen) + '...';
}

// Main test runner
function runTests(functions, tests, compare = deepEqual) {
  for (const fn of functions) {
    console.log(chalk.cyan(`\n▶ Testing function: ${fn.name}`));
    
    tests.forEach((test, index) => {
      const inputArgs = Array.isArray(test.input) ? test.input : [test.input];

      let result, error = null;
      const start = Date.now();
      try {
        result = fn(...inputArgs);
      } catch (err) {
        error = err;
      }
      const time = Date.now() - start;

      const pass = !error && compare(result, test.output);
      const prefix = pass ? chalk.green(`✔ Test ${index + 1}`) : chalk.red(`✘ Test ${index + 1}`);
      const nameStr = test.name ? ` (${test.name})` : '';

      const inputStr = shorten(test.input);
      const resultStr = error ? `Error: ${error.message}` : shorten(result);
      const expectedStr = shorten(test.output);

      console.log(`${prefix}${nameStr}`);
      console.log(`   Input:     ${inputStr}`);
      console.log(`   Output:    ${resultStr}`);
      if (!pass) console.log(chalk.red(`   Expected:  ${expectedStr}`));
      console.log(`   Time:      ${time}ms`);
    });
  }
}

module.exports = { runTests };

