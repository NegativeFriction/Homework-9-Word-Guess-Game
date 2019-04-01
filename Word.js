var Letter = require("./Letter.js");

var Word = function(solution) {
  wordToGuess = solution.split("");
  var arrayOfLetterObjs = [];
  for (var i = 0; i < wordToGuess.length; i++) {
    // Add in a letter object to my array of letter objects for each letter in the solution.
    arrayOfLetterObjs.push(new Letter(wordToGuess[i]));
  }
  this.array = arrayOfLetterObjs;

  this.wordToString = function() {
    var finalString = "";
    // console.log(this.array);
    for (var i = 0; i < this.array.length; i++) {
      finalString += this.array[i].isGuessed();
    }
    return finalString;
  };

  this.letterCheck = function(guess) {
    var changed = false;
    // console.log(guess);
    for (var i = 0; i < arrayOfLetterObjs.length; i++) {
      var checker = arrayOfLetterObjs[i].guess(guess);
      if (checker) {
        changed = true;
      }
    }
    return changed;
  };

  this.gotWord = function() {
    for (var i = 0; i < arrayOfLetterObjs.length; i++) {
      if (arrayOfLetterObjs[i].guessed === false) {
        return false;
      }
    }
    return true;
  };
};

module.exports = Word;
