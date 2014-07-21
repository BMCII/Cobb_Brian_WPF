/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditionals Industry
 */

//alert("testing 1,2,3");

//what time do I need to set may alarm for
//start with 10 min just in case

alert("enter time using 24 hour time where midnight is 00");

var timeUsed = 10;
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

/*
console.log(timeUsed);
console.log(hourWorkStarts);
console.log(minuteWorkStarts);
console.log(minutesCalculated);
console.log(workTimeCalculated);
console.log(alarmTime);
*/


var hour = Math.floor(alarmTime);
var minute = Math.round((alarmTime - hour) * 60);

if (hour === 24){
    hour = "00"

} else if (hour === -1){
    hour = 23

} else if (hour === -2){
    hour = 22

} else if (hour === -3){
    hour = 21

} else if (hour === -4) {
    hour = 20

} else if (hour === -5) {
    hour = 19

} else if (hour === -6) {
    hour = 18

} else if (hour === -7) {
    hour = 17

} else if (hour === -8) {
    hour = 16

} else if (hour === -9) {
    hour = 15

} else if (hour === -10) {
    hour = 14

} else if (hour === -11) {
    hour = 13

} else if (hour === -12) {
    hour = 12

} else if (hour === -13) {
    hour = 11

} else if (hour === -14) {
    hour = 10

} else if (hour === -15) {
    hour = 9

} else if (hour === -16) {
    hour = 8

} else if (hour === -17) {
    hour = 7

} else if (hour === -18) {
    hour = 6

} else if (hour === -19) {
    hour = 5

} else if (hour === -20) {
    hour = 4

} else if (hour === -21) {
    hour = 3

} else if (hour === -22) {
    hour = 2

} else if (hour === -23) {
    hour = 1

}
//minute = (minuteCalculated + timeUsed%60)*60 = 60 - (minutesCalculated + timeUsed%60);

var answer = ("You need to set your alarm for " + hour + ":" + minute);
alert(answer);

console.log(hour);
console.log(minute);



//console.log(timeUsed);

