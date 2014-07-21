/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditionals Industry
 */

//alert("testing 1,2,3");

//what time do I need to set may alarm for

var timeUsed = 0;
var totalTimes = [];
var shower = prompt("will you take a shower?");
var brushTeeth = prompt("will you brush your teeth?");
var breakfast = prompt("will you be eating breakfast?");



if ( shower === "yes"){
    timeUsed += 20

}
if (brushTeeth === "yes"){
    timeUsed += 5

}
if (breakfast === "yes"){
    breakfastMeal = prompt("cereal or pancakes");
    if (breakfastMeal === "cereal"){
        timeUsed += 10

    }
}
console.log(timeUsed);
