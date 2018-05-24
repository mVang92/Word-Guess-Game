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
console.log(chosenWord);