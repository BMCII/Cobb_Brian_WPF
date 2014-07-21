/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditionals Industry
 */

//alert("testing 1,2,3");

//what time do I need to set may alarm for

var timeUsed = 0;
var shower = prompt("will you take a shower?");
var brushTeeth = prompt("will you brush your teeth?");
var breakfast = prompt("will you be eating breakfast?");




if ( shower === "yes"){
    timeUsed += 20

}
//console.log(timeUsed);
if (brushTeeth === "yes"){
    timeUsed += 5

}
//console.log(timeUsed);
if (breakfast === "yes"){
    breakfastMeal = prompt("cereal or pancakes");

    if (breakfastMeal === "cereal" || breakfastMeal === "Cereal"){
        timeUsed += 10

    } else if (breakfastMeal ==="pancakes" || breakfastMeal ==="Pancakes" ) {
        timeUsed += 30

    } else {
        timeUsed += 20
    }
}

//console.log(timeUsed);
var drive = prompt("how many minutes does it take you to get to work?");
var driveNumber = parseInt(drive);
var gas = prompt("Will you need to stop for gas?");

timeUsed += driveNumber;

if (gas === "yes" || "Yes"){
    timeUsed += 10
}

var hourWorkStarts = prompt("What is the hour your work starts?");
var minuteWorkStarts = prompt ("at what minute does your work start?");
var minutesCalculated = parseInt(minuteWorkStarts) / 60;
var workTimeCalculated = parseInt(hourWorkStarts) + minutesCalculated;
var alarmTime = workTimeCalculated - (timeUsed / 60);

console.log(timeUsed);
console.log(hourWorkStarts);
console.log(minuteWorkStarts);
console.log(minutesCalculated);
console.log(workTimeCalculated);
console.log(alarmTime);


var hour = Math.floor(alarmTime);
var minute = Math.round((alarmTime - hour) * 60);

//minute = (minuteCalculated + timeUsed%60)*60 = 60 - (minutesCalculated + timeUsed%60);


console.log(hour);
console.log(minute);



//console.log(timeUsed);

