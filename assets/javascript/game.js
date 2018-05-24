// Make an array of words to guess
var wordList = [
    "engine cylinder head",
    "camshaft",
    "crankshaft",
    "valve cover gasket",
    "vehicle speed sensor",
    "drive belt tensioner pulley",
    "torque converter",
    "catalytic converter",
    "diagnostic trouble code reader",
    "fan clutch",
    "fuel regulator",
    "ignition coil over plug"
]

// Randomlly pick a word from wordList array
let randomWord = Math.floor(Math.random() * wordList.length);
let chosenWord = wordList[randomWord];
let underScore = [];
console.log(chosenWord);

// Create underscores based on length of the chosen word
// This makes an array of under scores (underScore)
let makeUnderScore = () => {
    for ( i = 0; i < chosenWord.length; i++ ){
        underScore.push("_");
    }
    return underScore;
}

console.log(makeUnderScore());