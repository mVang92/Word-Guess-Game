var player = 0;
var cpu = 0;

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
    "fan clutch"
]

var playerScore =
    "<p>"+ player + "</p>";
    document.querySelector("#playerScore").innerHTML = playerScore;

var cpuScore =
    "<p>"+ cpu + "</p>"
    document.querySelector("cpuScore").innerHTML = cpuScore;