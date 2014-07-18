/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Last Chance For Gas
 */

//alert("testing 1,2,3");

//need to set variables

var fuelEconomy = prompt("How many miles per gallon of fuel does your car get?");
var gaugeReading = prompt("what percent of fuel is left in gas tank?");("")
var tankCapacity = prompt("what is your gas tank capacity in gallons");

//set text string "numbers" to numbers

var fuelEconomyNumber = Number(fuelEconomy);
var gaugeReadingNumber = Number(gaugeReading);
var tankCapacityNumber = Number(tankCapacity);

console.log(fuelEconomyNumber);

//find miles able to drive on gas in tank
//   (gaugeReading/100) * tankCapacity * fuelEconomy

var distance = (gaugeReadingNumber / 100) * tankCapacityNumber * fuelEconomyNumber;

//need gallons in tank

// (gaugeReadingNumber / 100) * tankCapacityNumber

var gasInTank = (gaugeReadingNumber / 100) * tankCapacityNumber;

console.log(distance);
console.log(gasInTank);

var answer;
answer = (distance>200)?"Yes, you can make it without stopping for gas":"You only have " + gasInTank +
                        " gallons of gas in your tank, better get gas now while you can!";

alert(answer);