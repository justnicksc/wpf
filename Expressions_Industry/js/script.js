// James West Expressions Industry project 10/10/13

var fees = [.05, 389, 55,]; // sales fees 5 percent sales tax, $389 doc fee and $55 tag fee
var carPrice = prompt("Enter the selling price of car" ,20000); // The price of the car before fees
var downPayment = prompt("Enter down payment" ,carPrice *.20); // the down payment has a default value of 20 percent of selling price
var tradeValue = prompt("Enter trade in value" ,0); // the value of the trade in if there is one default of zero
var taxes = carPrice * fees[0]; // calculates the 5% sales tax

if (taxes > 300) // in South Carolina sales tax is 5% with a 300 dollar max
{
    taxes = 300;
}

var amountFinanced = carPrice - downPayment - tradeValue + taxes + fees[1] + fees[2]; // by subtracting down payment and trade in value from the car price then adding fees you get the amount that needs to be financed


alert ("The car cost " + carPrice + "\nThe taxes are " + taxes + "\nThe doc fee is " +fees[1] + "\nThe tag fee is " + fees[2] + "\n After down payment and trade in you will be financing " + amountFinanced);