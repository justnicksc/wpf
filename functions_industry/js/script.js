// James West Functions Industry 10/23/13

// this code will determine the if there is enough wire for all 3 building projects

var wireHand = prompt("Enter the amount of wiring on hand"); //this is the amount of wire that is on hand
var project1 = prompt("Enter the amount of wire needed for first project") //this is the amount of wire needed
project1 = parseInt(project1)
var project2 = prompt("Enter the amount of wire needed for the second project") //this is the amount of wire needed
project2 = parseInt(project2)
var project3 = prompt("Enter the amount of wire needed for the third project") // this is the amount of wire needed
project3 = parseInt(project3)
var wireNeeded = function(a, b, c){
    var totalWire = a + b + c;
    return totalWire;
}

var wireNeeded2 = wireNeeded(project1, project2, project3)

console.log(wireNeeded2)