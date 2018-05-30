// GLOBAL SCOPE VARIABLES
// Make an array of words to guess
var wordList = [
    "wrench".split(''), 
    "hammer".split(''), 
    "screw".split(''), 
    "distributor".split(''), 
]

// Randomlly pick a word from wordList array
var game = 0;
var randomWord = Math.floor(Math.random() * wordList.length);
var chosenWord = wordList[randomWord];
var myLength = chosenWord.length;
var display = [myLength];
var win = myLength;
// Splits answer array into separate characters at each index
// Use toString method to get underscores to generate correctly
var letters = chosenWord; //.toString().split('');
var lives = 10;
// How we display the underscore initially
var output = "";
// What ever letter the user guesses
var userLetter = "";
// END GLOBAL SCOPE VARIABLES

var running = function() {
    // Test running function
    // console.log("running function")
    document.getElementById("lives").innerHTML = lives;
    for (var i = 0; i < chosenWord.length; i++){
        display[i] = "_ ";
        output += display[i];
    }
    document.getElementById("wordToGuess").innerHTML = output;
    output = "";
    console.log(chosenWord)
}

var guessing = function(){
    // Test guessing function
    // console.log("in guessing function")
    output = "";
    // Listens to key presses
    document.onkeypress = function(event) {
        event = event || window.event;
        var charCode = event.keyCode || event.which;
        var userLetter = String.fromCharCode(charCode);
        // Test
        // console.log(userLetter);

        for (var n = 0; n < chosenWord.length; n++){
            // console.log(letters[n]);
            if (userLetter == letters[n]) {
                
                display[n] = userLetter;
                win--;
                console.log("if now")
            }
            output += display[n];
        }

        document.getElementById("lives").innerHTML = lives;
        output = "";
        lives--;

        if (win < 1) {
            console.log("win")
        } else if ( lives < 1) {
            console.log("lose")
        } else {
            console.log("you have " + lives + " lives remaining.")
        }
    }
}

document.getElementById("newBtn").addEventListener("click", function(){
    // console.log("New Game")
    running();
    guessing ();
});

// document.getElementById("newBtn").addEventListener("click", function(){
//     var makeUnderScore = 0
//     word = [];
//     for ( var i = 0; i < chosenWord.length; i++ ){
//         // Generates underscores and displays them on the screen
//         word.push(" _ ")
//         document.getElementById("wordToGuess").innerHTML = word;
//     }
    
//     // Listens to key presses
//     document.onkeypress = function(event) {
//         event = event || window.event;
//         var charCode = event.keyCode || event.which;
//         var charStr = String.fromCharCode(charCode);
//         // Test
//         console.log(charStr);
//         guess.push(charStr);
//         console.log(guess);
            
//         if (guess.length === chosenWord.length && guess === chosenWord) {
//             console.log("Good");
//         }
//     };

// });


// document.addEventListener("keypress", check());
// function check() {
//     for (var i = 0; i < chosenWord.length; i++ ) {
//         if ("keypress" === wordList[i]) {
//             console.log("keypress")
//         // rightLetter[i] = guess;
//         }
//     }
// }

// // Create underscores based on length of the chosen word
// // This makes an array of under scores (underScore)
// // Using fat arrow (=>) for more concise syntax


// console.log(makeUnderScore());

// // Use .addEventListener to track user key input
// // // Using fat arrow again
// document.addEventListener("keypress", (event) => {
//     // This gets the key code of the key being pressed
//     let keycode = event.keyCode;
//     // Converts the keycode from a code to a string
//     // keycode = event.keyCode, so we could also sustitute (keycode) for (event.keyCode), and delete the previous line of code
//     let keyWord = String.fromCharCode(keycode);
//     // Use .indexOf method to compare the chosen word
//     // If user guess is right
//     if (chosenWord.indexOf(keyWord) > -1) {
//         // Add to right word array
//         rightWord.push(keyWord);
//         // Replace underscore with the right letter
//         underScore[chosenWord.indexOf(keyWord)] = keyWord;
//         // Checks to see if user word matches guesses
//         if (underScore.join(" ") == chosenWord) {
//             alert("You Win");
//         }
//     } else {
//         // Add to wrong word array
//         wrongWord.push(keyWord);
//     }
    
// });

// // docUnderScore[0].innerHTML = makeUnderScore().join(" ");