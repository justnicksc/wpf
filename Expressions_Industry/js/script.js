// James West Expressions Industry project 10/10/13

var fees = [.05, 389, 55,]; // sales fees 5 percent sales tax, $389 doc fee and $55 tag fee
var carPrice = prompt("Enter the selling price of car" ,20000); // The price of the car before fees
var downPayment = prompt("Enter down payment" ,carPrice *.20); // the down payment has a default value of 20 percent of selling price
var tradeValue = prompt("Enter trade in value" ,0);
var taxes = carPrice * fees[0];

if (taxes > 300)
{
    taxes = 300;
}

var amountFinanced = carPrice - downPayment - tradeValue + taxes + fees[1] + fees[2];


alert ("The car cost " + carPrice + "\nThe taxes are " + taxes + "\nThe doc fee is " +fees[1] + "\nThe tag fee is " + fees[2] + "\n After down payment and trade in you will be financing " + amountFinanced);