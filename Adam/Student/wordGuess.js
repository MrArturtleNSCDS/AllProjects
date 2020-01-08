/*eslint-env jquery */

var vowels;
var randomLetter;
var consonants;
var selectedWords;
var firstQuestion;
var typeQuestion;
var guesses;


/* 
 * Calls the init function to start the game when the page loads
 */

init();


/* 
 * Initializes variables and calls askQuestion();
 */

function init(){
    vowels = ["A", "E", "I", "O", "U", "Y"];
    consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", 
        "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
    $('#startWrapper').hide();
    $('#freeResponseWrapper').show();
    firstQuestion = true;
    guesses = 0;
    $('#numGuesses').text("");
    $('#userInput').val("");
    $('#yesBox').text("");
    $('#noBox').text("");
    
    selectedWords = [];
    askQuestion();
}

/*
 * Determines the which question/message to display depending on:
 *      - if it's the first question
 *      - how many words are left in the selectedWords array
 *      - how many vowels are left
 *      - how many consonants are left
 */

function askQuestion(){
    
}

/*
 * Uses the parameter length to copy only words with the specified length 
 * to the selectedWords array
 */

function keepWordsLength(length){
    
}

/*
 * Returns a random letter from the array passed. It is used to pick both vowels
 * and consonants. Makes sure random letter gets removed from the array so as to 
 * not pick it again.
 */

function pickrandomLetter(letterArr){

}

/*
 * Uses the parameters letter and doHave to either keep or remove words that match
 * letter. 
 */

function removeWordsByLetter(letter,doHave){
    
}

/*
 * Users the parameter doHave to remove the appropriate word by its index
 */

function removeWordByIndex(doHave){
    
}

/*
 * Terminates the game. Displays the correct message based on if the right
 * word was guessed. Fades out the choice buttons and fades in the restart button.
 */

function checkAnswer(isWord){
    
}

/*
 * Makes sure the user's input is correct. If a correct length is typed, fades out
 * the input box and submit button, and calls keepWordsLength and askQuestion. If
 * an improper length is typed, displays and error message.
 */


$('#submitButton').click(
    
);

/*
 * Determines wich button was clicked (yes or no), and calls the appropriate function
 * depending on which type of question was asked.
 */

$('.choiceButton').click(
    
);

/*
 * Restarts the game by simply calling the init function.
 */

$('#restartButton').click(
   
);