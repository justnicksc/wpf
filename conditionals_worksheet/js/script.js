// James West 10-16-2013


//Last chance for gas

//Can the car make it to the next gas station 200 miles away

var gasTankCapacity = 20; 
var mpg = 48;
var gasGauge = 0.05;
var currentAmountGas = gasTankCapacity * gasGauge;
var range = currentAmountGas * 48;

/*if (range >= 200) {
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have" + " " + currentAmountGas + " " + "gallons of gas in your tank, better get gas now while you can!");
}*/

(range >= 200) ? console.log("Yes, you can make it without stopping for gas!") : console.log("You only have " + currentAmountGas + " gallons of gas in your tank, better get gas now while you can!");

// Check the login

var login = prompt("Enter user name");
var password = prompt("Enter Password");
var correctPassword = "password";
var correctUsername = "user";


if (login != correctUsername){
    console.log("User not found, try again"); 
}else if (login === correctUsername && password === correctPassword) {
    console.log("Welcome " + login + " !");
}else{
    console.log("Password does not match our records.");
}

// Tire pressure

var tirePressure = [27, 27, 30, 30]; //0= front right, 1= front left, 2= rear right, 3= rearleft

if (tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]) {
    console.log("Tires pass spec!");
}else{
    console.log("Get your tires checked out!");    
}    


