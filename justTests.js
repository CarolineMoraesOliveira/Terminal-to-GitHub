console.log ('Running main.js');

function d6() {
    var roll = Math.random(min, max);
    var min = 1;
    var max = 6;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);



