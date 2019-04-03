var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordsArray = [
  "arnab",
  "haddassah",
  "elton tom",
  "dartaniel",
  "michael is tha besssttt",
  "poornima"
];

var index = 0;
var guessesRemaining = 10;
var guessedLetters = [];
var solution;

function startGame() {
  solution = new Word(wordsArray[index]);
  renderLetters(solution);
  promptGuess();
}

function renderLetters() {
  console.log(solution.wordToString());
}

function checkGuess(guess) {
  if (solution.letterCheck(guess)) {
    guessesRemaining--;
  }
  guessedLetters.push(guess);
  if (solution.gotWord()) {
    reset();
  } else {
    renderLetters();
    promptGuess();
  }
}

function reset() {
  index++;
  guessesRemaining = 10;
  guessedLetters = [];
  startGame();
}

function promptGuess() {
  inquirer
    .prompt({
      message:
        "Please pick a letter (" + guessesRemaining + ") guesses remaining.",
      name: "userGuess",
      type: "input",
      validate: function(input) {
        return (
          input.length === 1 || "Please only enter one character at a time."
        );
      }
    })
    .then(function(response) {
      var guess = response.userGuess;
      checkGuess(guess, solution);
    });
}

startGame();

