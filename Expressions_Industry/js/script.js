// James West Expressions Industry project 10/10/13

var fees = [.05, 389, 55,]; // sales fees 5 percent sales tax, $389 doc fee and $55 tag fee
var carPrice = prompt("Enter the selling price of car" ,20000); // The price of the car before fees
var downPayment = prompt("Enter down payment" ,carPrice *.20); // the down payment has a default value of 20 percent of selling price
var tradeValue = prompt("Enter trade in value" ,0);
var taxes = carPrice * fees[0];
var amountFinanced = carPrice - downPayment - tradeValue + taxes + fees[1] + fees[2];
if (taxes > 300)
{
    taxes = 300;
}