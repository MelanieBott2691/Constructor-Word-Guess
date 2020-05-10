function Letter(value) {
    this.value = value;
    this.guessed = false;
    this.guessCheck = function(userInput) {
        if (userInput === this.value) {
            this.guessed = true;
        }
    };

    this.returnCharacter = function() {
        if (this.guessed === false) {
            return "_";
        } else {
            return this.value;
        }
    };
}


//         if (this.letter === " ") {
//             this.guessed = true;
//             return " ";
//         } else {
//             if (this.guessed === false) {
//                 return "_";
//             } else {
//                 return this.letter;
//             }
//         }
//     };
//     this.guess = function(guess) {
//         if (guess === this.letter) {
//             this.guessed = true;
//         }
//     };
// }
module.exports = Letter;