// James West 10-10-2013


// Dog years

var sparkysAge = 1; // Sparky's age in dog years
var dogYears = sparkysAge * 7; // Multiply Sparky's age by 7 to get his age in dog years

console.log ("Sparky is" + " " + sparkysAge + " " + "Which is" + " " + dogYears + " " + "in dog years");


// Slice of pie

var slices = 8; // how many slices in a pie
var pizzas = 10; // how many pizzas that were ordered
var people = 40; // how many people at the party
var slicePerPerson = slices * pizzas /people; // multiply how many slices in each pizza by the number of pizzas and divide by the number of people

console.log ("Each person ate" + " " + slicePerPerson + " " + "slices of pizza at the party");

// Slice of Pie II

var slices = 8; // how many slices in a pie
var pizzas = 10; // how many pizzas that were ordered
var people = 40; // how many people at the party
var sparkysPizza = slices * pizzas % people;// since there was no remainder sparky is going hungry

console.log ("Sparky got" + " " + sparkysPizza + " " + "slices of pizza" )

// Average shopping bill

var groceryBills = [125, 220, 135, 150, 210];

var groceryTotal = groceryBills[0] + groceryBills[1] + groceryBills[2] + groceryBills[3] + groceryBills[4];
var groceryAverage = groceryTotal/2;
console.log ("You have spent a total of $" + groceryTotal + " " + "on groceries over 5 weeks. That is an average of $" + groceryAverage + " " + "per week");

