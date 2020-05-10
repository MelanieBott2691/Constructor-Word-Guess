# Constructor-Word-Guess
### Instructions
With the Constructor-Word-Guess game user guesses a letter to try to find out the word, similar to hang-man.

### Game Set-up
- The completed game can receive user input using inquirer npm package
- The solution has a minimum of three files
   - Letter.js
      * has a string of values stored in the underlying character for the letter
      * has a boolean value that stores whether the letter has been guessed
      * has a function that returns the underlying character if the letter has been guessed, or a placeholder (an underscore) if the letter has not been guessed
   - Word.js
     * reads the array of word objects from index.js
     * has a function that returns a string representing the word. This calls the function on each letter object (defined in Letter.js) that displays the character on an underscore and concatenates them together
     * has a function that takes a character as an argument and calls the guess function on each letter object (the second defined in Letter.js)
   - index.js
     * randomly selects a word and uses the Word constructor to store it
     * prompts the user for each guess and keeps track of the user's remaining guesses

#### Technologies Used
- Node.js
- JavaScript
- NPM for JS library management
- Inquire.js
- JSON packages

#### Files Used
- Index.js is dependent on Word.js
- Word.js only requires Letter.js
- Letter.js does not require any other files

## Screenshot Images of Constructor-Word_Guess

![Command Line](/images/constructor.png)

![Video](/images/constructor1.mp4)

 <video width="400" controls>
 <source src="constructor1.mp4" type="video/mp4></video>
