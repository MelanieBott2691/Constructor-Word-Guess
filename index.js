// INDEX.JS requires word.js

// initialize constructor
var Word = require("./word.js");
var inquirer = require("inquirer");

// array of words to be entered
var wordArray = ["corona", "quarantine", "toilet paper", "pandemic", "clorox", "hand sanitizer", "zoom", "six feet"];
var randomWord = "";
var wordDisplay = "";
var lastWord;
var guessesLeft;
var lives = 5;

function newGame() {
    randomWord = "";
    var randomIndex = parseInt(Math.floor(Math.random() * (wordArray.length)));
    randomWord = wordArray[randomIndex];

    // passes random word through Word.js contructor
    lastWord = new Word(randomWord);
    guessesLeft = lastWord.objectArray.length;
}

function gameOver() {
    {
        console.log("Game Over!");
        inquirer.prompt([{
            type: "confirm",
            name: "playAgain",
            message: "Play Again?"
        }]).then(function(response) {
            if (response.playAgain) {
                newGame();
                print();
                guessAgain();
            } else {
                console.log("Thanks for playing!");
            }
        });
    }
}

function displayWord() {
    wordDisplay = lastWord.createAnswerString();
    console.log(wordDisplay);
    lastWord.compage = wordDisplay;
}

function guessAgain() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter"
    }]).then(function(response) {
        var userInput = response.ask;
        if (lives > 0) {
            if (userInput.length === 1) {
                lastWord.wordCheck(userInput);
                wordDisplay = lastWord.createAnswerString();

                if (lastWord.compare === wordDisplay) {
                    console.log("Wrong, no", userInput, "in the word");
                    lives--;
                    console.log("There are only", lives, "guesse(s) left");

                    //no more lives game over or play again
                    if (lives === 0) {
                        gameOver();
                    } else {
                        print();
                        guessAgain();
                    }
                } else {
                    console.log("Make another guess!");
                    guessesLeft--;
                    print();
                    if (guessesLeft === 0) {
                        console.log("You Did Great. Get ready for the next word");
                        newGame();
                        print();
                        guessAgain();
                    } else {
                        guessAgain();
                    }
                }

            } else if (userInput.length === 0) {
                console.log("Choose a letter");
                guessAgain();
            } else {
                console.log("Choose one letter at a time");
                guessAgain();
            }
        } else {
            gameOver();
        }
    });
}


function print() {
    // console.log("\n");
    console.log("***************************************");
    displayWord();
    console.log("***************************************");
    // console.log("\n");
}

newGame();
print();
guessAgain();