const prompt = require("prompt-sync")();

character = prompt("Enter a single alphabet: ");

if (!/^[a-zA-Z]$/.test(character)) {
  console.log("Please enter only a single alphabet (a-z or A-Z).");
  process.exit(1);
}

console.log(
  `${character} is a ${
    /^[a,e,i,o,u]$/.test(character.toLowerCase()) ? "vowel" : "consonant"
  }.`
);
