// Make an array of words to guess
var wordList = [
    "wrench",
    "hammer",
    "screw"
]

// Randomlly pick a word from wordList array
let randomWord = Math.floor(Math.random() * wordList.length);
let chosenWord = wordList[randomWord];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// DOM manipulation
let docUnderScore = document.getElementsById("wordToGuess");
let docRightGuess = document.getElementsByClassName("wordToGuess");
let docWrongGuess = document.getElementsByClassName("wordToGuess");

console.log(chosenWord);

// Create underscores based on length of the chosen word
// This makes an array of under scores (underScore)
// Using fat arrow (=>) for more concise syntax
let makeUnderScore = () => {
    for ( i = 0; i < chosenWord.length; i++ ){
        underScore.push("_");
    }
    return underScore;
}

console.log(makeUnderScore());

// Use .addEventListener to track user key input
// Using fat arrow again
document.addEventListener("keypress", (event) => {
    // This gets the key code of the key being pressed
    let keycode = event.keyCode;
    // Converts the keycode from a code to a string
    // keycode = event.keyCode, so we could also sustitute (keycode) for (event.keyCode), and delete the previous line of code
    let keyWord = String.fromCharCode(keycode);
    // Use .indexOf method to compare the chosen word
    // If user guess is right
    if (chosenWord.indexOf(keyWord) > -1) {
        // Add to right word array
        rightWord.push(keyWord);
        // Replace underscore with the right letter
        underScore[chosenWord.indexOf(keyWord)] = keyWord;
        // Checks to see if user word matches guesses
        if (underScore.join(" ") == chosenWord) {
            alert("You Win");
        }
    } else {
        // Add to wrong word array
        wrongWord.push(keyWord);
    }
    
});

docUnderScore[0].innerHTML = makeUnderScore().join(" ");

