var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordsArray = [
  "arnab",
  "haddassah",
  "elton tom",
  "dartaniel",
  "michael deletes comments from slack did you think i would forget michael well i did not i remember everything michael.",
  "poornima"
];

var index = -1;
var guessesRemaining = 10;
var guessedLetters = [];
var solution;

function main() {
  console.log(solution.wordToString());
  if (solution.gotWord()) {
    reset();
    // console.log(guessedLetters);
  }
  guess();
}

function reset() {
  index++;
  guessesRemaining = 10;
  guessedLetters = [];
  // console.log(wordsArray[index]);
  solution = new Word(wordsArray[index]);
  main();
}

function guess() {
  inquirer
    .prompt({
      message:
        "Please pick a letter (" + guessesRemaining + ") guesses remaining.",
      name: "userGuess",
      type: "input"
    })
    .then(function(response) {
      console.log(response.userGuess);
      if (response.userGuess.length > 1) {
        console.log("Please only enter one character at a time.");
        guess();
        // } else if (guessedLetters.indexOf(response.userGuess) >= 0) {
        //   console.log(guessedLetters.indexOf(response.userGuess));
        //   console.log("You already guessed that letter.");
        //   guess();
      } else {
        // console.log("Guessed", response.userGuess);
        var changed = solution.letterCheck(response.userGuess);
        // console.log("Changed:", changed);
        if (!changed) {
          guessesRemaining--;
        }
        guessedLetters.push(response.userGuess);
        main();
      }
    });
}

reset();
