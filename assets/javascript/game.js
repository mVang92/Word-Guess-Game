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
var wrongGuess = [];
// // How we display the underscore initially
var output = "";
// // What ever letter the user guesses
var userLetter = "";
// END GLOBAL SCOPE VARIABLES

// Displays amount of lives left into HTML
document.getElementById("lives").innerHTML = lives;
// Displays a hint for each word
if (chosenWord === "flexplate"){
    document.getElementById("hint").innerHTML = 
    "This is a metal disk that connects the output from an engine to the input of a torque converter in a car equipped with an automatic transmission. It takes the place of the flywheel found in a conventional standard transmission setup."
} else if (chosenWord === "flywheel") {
    document.getElementById("hint").innerHTML = 
    "Found on standard transmission vehicles, this part is a mechanical device specifically designed to efficiently store rotational energy. They resist changes in rotational speed by their moment of inertia.";;
} else if (chosenWord === "transmission") {
    document.getElementById("hint").innerHTML = 
    "The mechanism by which power is transmitted from an engine to the wheels of a motor vehicle.";
} else if (chosenWord === "distributor") {
    document.getElementById("hint").innerHTML = 
    "Although most vehicles have switched to coil-on-plugs, the purpose of this device is to route secondary, or high voltage, current from the ignition coil to the spark plugs in the correct firing order, and for the correct amount of time.";
} else if (chosenWord === "alternator") {
    document.getElementById("hint").innerHTML = 
    "This is an electrical generator that converts mechanical energy to electrical energy. It also recharges the battery and runs all electrical accessories on the vehicle.";
} else if (chosenWord === "crankshaft") {
    document.getElementById("hint").innerHTML = 
    "This is a shaft which transmits the power developed by the engine to the various parts of the vehicle.";
} else if (chosenWord === "differential") {
    document.getElementById("hint").innerHTML = 
    "Equiped on all motor vehicles, this component is designed to compensate for the difference in distance the inner wheels and outer wheels travel as the car goes around a corner.";
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
        // window.location.reload();
    }
    document.getElementById("lives").innerHTML = lives;
    
}
