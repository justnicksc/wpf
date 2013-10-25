// James West Function Personal 10/23/13

// This code will calculate my average time for running 2 miles per day for a week with 2 days rest and see if I met my goal of lowering by at least 2 min

var startingAvg = prompt("What is your starting average run time for the week"); // This is the average time for the previous week to compare to
var runtimes = new Array(); // current week run times in minutes
runtimes[0] = prompt("Enter day 1 time"); // run time for current day
runtimes[1] = prompt("Enter day 2 time"); // run time for current day
runtimes[3] = prompt("Enter day 3 time"); // run time for current day
runtimes[4] = prompt("Enter day 4 time"); // run time for current day
runtimes[5] = prompt("Enter day 5 time"); // run time for current day

// This calculates the average run time for the current week
var avgrun = avgRunTime(runtimes[0], runtimes[1], runtimes[2], runtimes[3], runtimes[4])

function avgRunTime(d1,d2,d3,d4,d5){

}