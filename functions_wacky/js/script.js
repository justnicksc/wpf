// James West Functions Wacky 10/23/13



// calculate the total sale for the month and give the average week. Also tell us if we did better than last month

var week1 = prompt("Enter week 1 sales");// week 1 sales
week1 = parseInt(week1);
var week2 = prompt("Enter week 2 sales");// week 1 sales
week2 = parseInt(week2);
var week3 = prompt("Enter week 3 sales");// week 1 sales
week3 = parseInt(week3);
var week4 = prompt("Enter week 4 sales");// week 1 sales
week4 = parseInt(week4);
var lastMonth = prompt("Enter last months sales");// last months sales
lastMonth = parseInt(lastMonth);

var avgSales = avg(week1, week2, week3, week4);

function avg(a, b, c, d){
    var avgWeek = (a + b + c + d)/4;
    return avgWeek;
}

(avgSales > lastMonth) ? console.log("You averaged " + avgSales + " dollars per week. Great job you beat last month") : console.log("You averaged " + avgSales + " dollars per week. You need to do better")