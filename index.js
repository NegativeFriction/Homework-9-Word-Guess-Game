require("./Word.js");
require("inquirer");

var wordsArray = [
  "Arnab",
  "Haddassah",
  "Elton Tom",
  "Dartaniel",
  "Michael Deletes Comics from Slack and I am Still Bitter About It Did You Think That I would forget that Michael",
  "poornima"
];

var index = 0;
var guessesRemaining = 10;
var guessedLetters = [];
