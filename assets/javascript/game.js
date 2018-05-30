// GLOBAL SCOPE VARIABLES
// Make an array of words to guess
var wordList = [
    "flexplate",//.split(""), 
    "flywheel",//.split(""), 
    "transmission",//.split(""),
    "distributor",//.split(""),
    "alternator",//.split(""),
    "crankshaft",//.split(""),
    "differential"//.split("")
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

// Displays amount of lives left into HTML
document.getElementById("lives").innerHTML = lives;
// Displays a hint for each word
if (chosenWord === "flexplate"){
    document.getElementById("hint").innerHTML = "flexplate hint";
} else if (chosenWord === "flywheel") {
    document.getElementById("hint").innerHTML = "flywheel hint";
} else if (chosenWord === "transmission") {
    document.getElementById("hint").innerHTML = "transmission hint";
} else if (chosenWord === "distributor") {
    document.getElementById("hint").innerHTML = "distributor hint";
} else if (chosenWord === "alternator") {
    document.getElementById("hint").innerHTML = "alternator hint";
} else if (chosenWord === "crankshaft") {
    document.getElementById("hint").innerHTML = "crankshaft hint";
} else if (chosenWord === "differential") {
    document.getElementById("hint").innerHTML = "differential hint";
}

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
            // Each time the guess letter is found... 
            if (chosenWord[i] === userLetter) {
                // Add it as a good guess in the same spot
                rightGuess[i] = userLetter;
                document.getElementById("wordToGuess").innerHTML = rightGuess;
            }
            
        }
        
    }
    
    // Displays the correct word once all lives are used up
    if (lives < 1){
        lives = 0;
        document.getElementById("showWord").innerHTML = "The correct word is \"" + chosenWord + "\".";
    }
    document.getElementById("lives").innerHTML = lives;
}
