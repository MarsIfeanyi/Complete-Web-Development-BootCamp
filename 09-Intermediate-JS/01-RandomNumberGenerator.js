// Generating random number between 1 and 6 as in dice roll

var n = Math.random();
n = n * 6; // generates btw 0 and 5
n = Math.floor(n) + 1; // generates btw 0 and 6
console.log(n);

//Building a Love calculator
prompt("What is your name");
prompt("what is their name");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");
