//James West Industry Conditional 10/17/13

//This calculates if we met our sales goal and if we sold more cars than last month

var lastMonth = 240 // this is a preset variable for the previous month.
var currentMonth = prompt("Enter the total sales for month."); // user will provide this information

if (currentMonth == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
     currentMonth = prompt("Enter total sales for month"); // this gives the user a second chance to enter info
}

var goal = prompt("Enter this months goal."); //number of cars that was projected for this month

if (goal == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
    goal = prompt("Enter this months goal"); // this gives the user a second chance to enter info
}

if (currentMonth >= goal && lastMonth < currentMonth){// if current month meets the goal and beats last month
    console.log ("Congratulations, you sold " + currentMonth + " cars making your goal of " + goal + " cars");
}else if (currentMonth < goal && lastMonth > currentMonth) {// this is if you dont meet goal or beat last month
    console.log ("Better dust off your resume. You did not meet your goal or sell more than last month");
}else if (currentMonth >= goal && lastMonth > currentMonth){ // this is if you meet the goal but not beat last month
    console.log ("Good job! You met your sales goal of " + goal + " cars, but you did not sell more than last month.");
}else {
    console.log ("You did not meet your goal but you did beat last months sales");
}