// Make an array of words to guess
var wordList = [
    "wrench".split(''), 
    "hammer".split(''), 
    "screw".split(''), 
    "distributor".split(''), 
]

// // Randomlly pick a word from wordList array
var randomWord = Math.floor(Math.random() * wordList.length);
var chosenWord = wordList[randomWord];
var rightLetter = [];
var guess = [];
// let wrongWord = [];
// let underScore = [];

document.getElementById("newBtn").addEventListener("click", function(){
    var makeUnderScore = 0
    word = [];
    for ( var i = 0; i < chosenWord.length; i++ ){
        // Generates underscores and displays them on the screen
        word.push(" _ ")
        document.getElementById("wordToGuess").innerHTML = word;
    }
    // Test
    console.log(chosenWord);
    
    // Listens to key presses
    document.onkeypress = function(event) {
        event = event || window.event;
        var charCode = event.keyCode || event.which;
        var charStr = String.fromCharCode(charCode);
        // Test
        console.log(charStr);
        guess.push(charStr);
        console.log(guess);
            
        if (guess.length === chosenWord.length && guess === chosenWord) {
            console.log("Good");
        }
    };

});

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

