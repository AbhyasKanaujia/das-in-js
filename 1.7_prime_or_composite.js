// if no number can cleanly divide then prime
// start from 2
// go until n / 2
// By definition, only natural numbers except 1.

const prompt = require("prompt-sync")();

// Assumes n is > 1
function isPrime(n) {
  for (let divisor = 2; divisor <= n / 2; divisor++)
    if (n % divisor === 0) return false;

  return true;
}

const n = parseInt(prompt("Enter a number of check if its a prime number: "));

if (n < 2) {
  console.log(
    `${n} is neither prime nor composite. Primes and composite numbers start from 2 and up.`
  );
} else if (isPrime(n)) {
  console.log(`${n} is a prime number.`);
} else {
  console.log(`${n} is a composite number.`);
}
