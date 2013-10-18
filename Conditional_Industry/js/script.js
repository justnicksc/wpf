//James West Industry Conditional 10/17/13

//This calculates if we met our sales goal and if we sold more that last month

var lastMonth = 240 // this is a preset variable for the previous month.
var currentMonth = prompt("Enter the total sales for month.") // user will provide this information

if (currentMonth == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
     currentMonth = prompt("Enter the total cost of vacation."); // this gives the user a second chance to enter info
}