// initialize constructor
var Word = require("./word.js");
var inquirer = require("inquirer");

// array of letters to be entered
var letterArray = "abcdefghijklmnopqrstuvwxyz";

// string of words to choose from
var CoronaVirus = ["corona", "quarantine", "toilet paper", "pandemic", "clorox", "hand sanitizer", "zoom", "six feet"];

var randomWord = CoronaVirus[randomIndex];
var randomIndex = Math.floor(Math.random() * CoronaVirus.length);

// passes random word through Word.js contructor
computerWord = new Word(randomWord);
var requireNewWord = false;

// array for guessed letters
var incorrectLetters = [];
var correctLetters = [];
//remaining guesses
var guessesLeft = 10;

function knowledge() {
    if (requireNewWord) {
        var randomWord = CoronaVirus[randomIndex];
        var randomIndex = Math.floor(Math.random() * CoronaVirus.length);
        var computerWord = new Word(randomWord);

        requireNewWord = false;
    }
    // letter guessed correct
    var guessedLetterChecked = [];
    // computerWord.objArray.forEach(completeCheck);
    if (guessedLetterChecked.includes(false)) {
        inquirer
            .prompt([{
                type: "input",
                message: "Guess a letter between A-Z!",
                name: "userInput"
            }])
            .then(function(input) {
                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    knowledge();
                } else {
                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === " ") {
                        console.log("\nLetter already guessed\n");
                        knowledge();
                    } else {
                        var checkWordArray = [];

                        computerWord.userGuess(input.userinput);

                        computerWord.objectArray.forEach(checkWord);

                        if (checkWordArray.join('') === guessedLetterChecked.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect\n");

                            correctLetters.push(input.userinput);
                        }

                        computerWord.log();
                        // prints the guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");
                        // prints letter guessed
                        console.log("Letter Guessed: " + incorrectLetters.join(" ") + "\n");
                        // remaining guesses
                        if (guessesLeft > 0) {
                            knowledge();
                        } else {
                            console.log("You Lose!\n");
                            restartGame();
                        }

                        function checkWord(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            });

    } else {
        console.log("You WIN!!!\n");
        restartGame();
    }

    function completeCheck(key) {
        guessedLetterChecked.push(key.guessed);
    }
}

function restartGame() {
    inquirer
        .prompt([{
            type: "list",
            message: "What next:",
            choices: ["Exit", "Play Again"],
            name: "restart"
        }])
        .then(function(input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return;
            }
        });
}
knowledge();