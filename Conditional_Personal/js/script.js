// James West Personal Conditional 10/17/13.

var vacCost = prompt("Enter the Total cost of the vacation."); //This is the cost of the vacation

if (vacCost == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
}

var monthlyIncome = prompt("Enter the total household income."); //This is the total household income of the family

if (monthlyIncome == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
}

var monthlyIncome = prompt("Enter the total household income."); //This is the total household income of the family

if (monthlyIncome == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
}

var bills = prompt("Enter the total amount of bills and expenses."); //This is the total of bills, food, expenses...

if (bills == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
}

var savings = monthlyIncome - bills;

var timeToSave = prompt("Enter how many months untill vacation."); // This is the amount of time you have to save

if (timeToSave == "") {
    console.log('You cannot leave field blank.'); // this code validates entry
}

var amountSaved = savings * timeToSave; // This is the total amount saved over the time set by user
