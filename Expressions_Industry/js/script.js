/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions Industry
 */

//alert("testing 1,2,3");

//how much to charge for a basic website

var baseCost = (250);
var numberOfPages = prompt("How many pages would you like?");
var addOns = prompt("how many add-ons would you like\n shopping cart,\n SEO, \n maintenance, \n Logo");
var type = prompt("ecomerce, basic or CMS?");

//how to give a value to var type?



var baseCostNumber = parseInt(baseCost);
var numberOfPagesNumber = parseInt(numberOfPages);
var addOnsNumber = parseInt(addOns);

var totalCost = (baseCostNumber + (numberOfPagesNumber *  50) + (addOnsNumber * 50));
console.log(totalCost);

console.log(baseCostNumber);
console.log(numberOfPagesNumber);
console.log(addOnsNumber);

//working so far

var answer = alert("you would like a(an) " + type + " website for $" + totalCost);


