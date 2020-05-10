// LETTER.JS 

function Letter(value) {
    this.value = value;
    this.guessed = false;
    this.wordCheck = function(userInput) {
        if (userInput === this.value) {
            this.guessed = true;
        }
    };

    this.returnChar = function() {
        if (this.guessed === false) {
            return "_";
        } else {
            return this.value;
        }
    };
}

module.exports = Letter;