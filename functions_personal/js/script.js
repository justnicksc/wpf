// James West Function Personal 10/23/13

// This code will calculate my average time for running 2 miles per day for a week with 2 days rest and see if I met my goal of lowering by at least 2 min

var startingAvg = prompt("What is your starting average run time for the week"); // This is the average time for the previous week to compare to

var runTime1 = prompt("Enter day 1 time"); // run time for current day
runTime1 = parseInt(runTime1);
var runTime2 = prompt("Enter day 2 time"); // run time for current day
runTime2 = parseInt(runTime2);
var runTime3 = prompt("Enter day 3 time"); // run time for current day
runTime3 = parseInt(runTime3);
var runTime4 = prompt("Enter day 4 time"); // run time for current day
runTime4 = parseInt(runTime4);
var runTime5 = prompt("Enter day 5 time"); // run time for current day
runTime5 = parseInt(runTime5);

// This calculates the average run time for the current week
var averageRun = avgRunTime(runTime1, runTime2, runTime3, runTime4, runTime5);

function avgRunTime(a, b, c, d, e){
    var totalRun = a + b + c + d + e; // total of all the days run
    var avgRun = totalRun/5; // divides totalRun by 5
    return avgRun; // outputs calculation
}

if (averageRun == startingAvg){
    console.log("your average was " + averageRun + " mintutes. You did not beat your time by 2 minutes, but you didn't do any worse");
}else if(averageRun > startingAvg){
    console.log("your average was " + averageRun + " mintutes. You are getting slower. Pick it up");
}else if(averageRun < startingAvg && averageRun > startingAvg - 2){
    console.log("your average was " + averageRun + " mintutes. You did not beat your time by 2 minutes, but you are getting better");
}else{
    console.log("your average was " + averageRun + " mintutes. You beat your score by 2 minutes or more!");
}