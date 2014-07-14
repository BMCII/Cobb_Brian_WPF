
/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//create basic array
var avengersNames = ["Iron Man","Hulk","Thor","Captain America"];

//print assay
console.log(avengersNames);

//access a specific item in array

console.log(avengersNames[3]);

//set specific item

avengersNames[0] = "hawkeye";
console.log(avengersNames);
avengersNames[4] = "Antman";
console.log(avengersNames);
console.log(avengersNames.length);
//counts items in array

//last index number is one less than length

//Picking Oranges

var orangeBins = [234,567,883];

//how many oranges picked

var totalOranges = orangeBins[0] + orangeBins[1] +orangeBins[2];
console.log("the total number of oranges picked is " + totalOranges);
var average = totalOranges / orangeBins.length;

//to round number
//.tofixed()
console.log("the average number of oranges is " +average.toFixed(2));