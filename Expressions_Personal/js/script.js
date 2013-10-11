// James West Expressions 10/10/13


//This script is going to calculate the average score for 5 rounds of golf

var round1 = prompt("Enter round 1 score")// prompt to enter the score of the first round of golf
var round2 = prompt("Enter round 2 score")// prompt to enter the score of your second round of golf
var round3 = prompt("Enter round 3 score")// prompt to enter the score of your third round of golf
var round4 = prompt("Enter round 4 score")// prompt to enter the score of your fourth round of golf
var round5 = prompt("Enter round 5 score")// prompt to enter the score of your fifth round of golf

// By adding the all of the scores together and dividing that total by the number of round we can get your average score
var average = (Number(round1) + Number(round2) + Number(round3) + Number(round4) + Number(round5))/5

// the alert box will display the average
alert ("I played 5 rounds of golf with an average score of " + average)