// James West Wacky Conditional 10/17/13


// This will calculate if there is enough water for all the people for a day

var waterPerDay = 64; // this is how much a person should drink per day of water in ounces
var totalWater = prompt("Enter the total amount of water in ounces"); // user should enter the total amount of water the group has
var totalPeople = prompt("Enter how many people are in the group"); // total amount of people in the group
var totalWaterNeeded = waterPerDay * totalPeople; // This is the total water needed for the group

(totalWater >= waterPerDay) "You have enough water for the whole group" : "You might want to lose dave. There is not enough water"//