// Write a program to calculate simple interest and
// compound interest.

const prompt = require("prompt-sync")();

const principal = parseFloat(prompt("Enter principal: "));
const rate = parseFloat(prompt("Enter interest rate(10 -> 10%): "));
const time = parseFloat(prompt("Enter time in years(e.g 1.3): "));

const simple_interest = (principal * rate * time) / 100;
const compound_interest = principal * Math.pow(1 + rate / 100, time) - principal;

console.log(`Simple Interest: ${simple_interest}`);
console.log(`Compound Interest: ${compound_interest}`);
