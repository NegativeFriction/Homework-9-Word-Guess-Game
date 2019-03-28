var Letter = function(val) {
  // Check whether or not the user has guessed this letter. Defaults to false, since the user will not have guessed anything initially.
  this.guessed = false;

  // The letter that this should display if the user has guessed it.
  this.val = val;

  this.isGuessed = function() {
    if (this.guessed | (this.val === " ")) {
      return val;
    } else {
      return "/";
    }
  };

  this.guess = function(userGuess) {
    if (userGuess === this.val) {
      this.guessed = true;
    }
  };
};
