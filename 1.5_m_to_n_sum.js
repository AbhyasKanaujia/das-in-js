const prompt = require("prompt-sync")();

const sum_of_arithmetic_series = (number_of_terms, first_term, last_term) =>
  (number_of_terms / 2) * (first_term + last_term);

console.log("Get the sum from m(inclusive) to n(exclusive)");
while (true) {
  let m = parseInt(prompt("Enter the value of m: "));
  let n = parseInt(prompt("Enter the value of n: "));

  let number_of_terms = Math.abs(n - m);
  let delta = n > m ? -1 : 1;
  let sum = sum_of_arithmetic_series(number_of_terms, m, n + delta);
  console.log(sum);
}

