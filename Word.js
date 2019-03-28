require("./Letter.js");

var Word = function(solution) {
  wordToGuess = solution.split("");
  var arrayOfLetterObjs = [];
  for (var i = 0; i < wordToGuess.length; i++) {
    // Add in a letter object to my array of letter objects for each letter in the solution.
    arrayOfLetterObjs.push(Letter(wordToGuess[i]));
  }
  this.array = arrayOfLetterObjs;

  this.wordToString = function() {
    var finalString = "";
    for (var i = 0; i < this.array.length; i++) {
      finalString += this.array[i].isGuessed();
    }
    return finalString;
  };

  this.letterCheck = function(guess) {
    for (var i = 0; i < arrayOfLetterObjs; i++) {
      arrayOfLetterObjs[i].guess(guess);
    }
  };
};
