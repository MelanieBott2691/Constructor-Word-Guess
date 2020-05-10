var Letter = require("./letter.js");

function Word(answer) {
    this.ojectArray = [];
    this.compare = "";
    for (var i = 0; i < answer.length; i++) {
        this.objectArray.push(new Letter(answer[i]));
    }
    this.createAnswerString = function() {
        var answerLog = " ";
        for (var j = 0; j < this.objectArray.length; j++) {
            answerLog += this.objectArray[i].returnChar() + " ";
        }
        // console.log(answerLog + "\n");
        return answerLog;
    }
    this.userGuess = function(input) {
        for (var k = 0; k < this.objectArray.length; k++) {
            this.objectArray[i].guessCheck(input);
        }
    };
}
module.exports = Word;