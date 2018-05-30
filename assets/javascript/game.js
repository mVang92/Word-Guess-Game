// GLOBAL SCOPE VARIABLES
// Make an array of words to guess
var wordList = [
    "wrench", //.split(''), 
    "hammer", //.split(''), 
    "screw", //.split(''), 
    "distributor", //.split(''), 
]

// Randomlly pick a word from wordList array
var randomWord = Math.floor(Math.random() * wordList.length);
var chosenWord = wordList[randomWord];
var myLength = chosenWord.length;
var display = [myLength];
var win = myLength;
// // Splits answer array into separate characters at each index
// // Use toString method to get underscores to generate correctly
var letters = chosenWord; //.toString().split('');
var lives = 10;
var rightGuess = [];
var wrongGuess = 0;
// // How we display the underscore initially
var output = "";
// // What ever letter the user guesses
var userLetter = "";
// END GLOBAL SCOPE VARIABLES

// Running function
var running = function() {
    // Test running function
    // console.log("running function")

    // Displays amount of lives left into HTML
    document.getElementById("lives").innerHTML = lives;
    //Generates underscores for the number of characters in the chosenWord array
    for (var i = 0; i < chosenWord.length; i++){
        // Displays underscores onto the screen
        display[i] = "_,";
        output += display[i];
        // Put some underscores into rightGuess array
        rightGuess.push("_")
    }
    document.getElementById("wordToGuess").innerHTML = output;
    // Resets underscores
    output = "";
    // Stop cheating...
    console.log(chosenWord);

    // Listens to key presses
    document.onkeypress = function(event) {
        event = event || window.event;
        // Converts key code into a character we can understand
        var charCode = event.keyCode || event.which;
        var userLetter = String.fromCharCode(charCode);
        // Test
        // console.log(userLetter);

        if (chosenWord.indexOf(userLetter) < 0) {
            console.log("Bad guess!");
            lives--;
        
        // If the letter exists in the word, we need to
        // add it to the good guesses array
        } else {
            for (i = 0; i < chosenWord.length; i++) {
                // Each time the guess letter is found, we
                // add it as a good guess in the same spot
                if (chosenWord[i] === userLetter) {
                    rightGuess[i] = userLetter;
                    document.getElementById("wordToGuess").innerHTML = rightGuess;
                }
            }
        }

        if (chosenWord.indexOf(rightGuess) > 0){
            console.log("win")
        }
        output = "";
        document.getElementById("lives").innerHTML = lives;
    }
}

// New button function
document.getElementById("newBtn").addEventListener("click", function(){
    // Test New Game button function
    // console.log("New Game")

    // Reset lives when new button is clicked
    lives = 10;
    //Calls running function
    running();
});