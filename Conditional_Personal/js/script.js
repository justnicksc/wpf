// James West Personal Conditional 10/17/13.

var vacCost = prompt("Enter the Total cost of the vacation."); //This is the cost of the vacation

if (vacCost == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
    vacCost = prompt("Enter the total cost of vacation."); // this gives the user a second chance to enter info
}

var monthlyIncome = prompt("Enter the total household income."); //This is the total household income of the family

if (monthlyIncome == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
    monthlyIncome = prompt("Enter the total household income."); // this gives the user a second chance to enter info
}

var bills = prompt("Enter the total amount of bills and expenses."); //This is the total of bills, food, expenses...

if (bills == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
    bills = prompt("Enter the total amount of bills and expenses."); // This gives the user a second chance to enter info
}

var savings = monthlyIncome - bills;

var timeToSave = prompt("Enter how many months until vacation."); // This is the amount of time you have to save

if (timeToSave == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
    timeToSave = prompt("Enter how many months until vacation."); /// This gives the user a second chance to enter info
}

var amountSaved = savings * timeToSave; // This is the total amount saved over the time set by user

if (amountSaved >= vacCost) {
    console.log ("Start packing you can afford your vacation!")
}else {
    console.log ("Sorry, but you did not save enough money. Keep saving and you will get your vacation.")
}