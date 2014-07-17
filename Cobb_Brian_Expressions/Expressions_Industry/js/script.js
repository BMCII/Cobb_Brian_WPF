/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions Industry
 */

//alert("testing 1,2,3");

//how much to charge for a website

alert("enter only numbers\nunless asked otherwise");

var baseCost = (250);
var numberOfPages = prompt("How many pages would you like?");
var addOns = prompt("how many add-ons would you like\n 1) shopping cart,\n 2) SEO, \n 3) maintenance, \n 4) Logo");
var type = prompt("would you like an ecomerce, a basic or a CMS website? \n\ntype answer");

console.log(baseCost);

//parseInt answers to make them numbers

var baseCostNumber = parseInt(baseCost);
var numberOfPagesNumber = parseInt(numberOfPages);
var addOnsNumber = parseInt(addOns);

console.log(baseCostNumber);

// totalCost is baseCost + numberOfPages * 50 a page + 50 an add on

var totalCost = (baseCostNumber + (numberOfPagesNumber *  50) + (addOnsNumber * 50));
console.log(totalCost);

//test numbers

console.log(baseCostNumber);
console.log(numberOfPagesNumber);
console.log(addOnsNumber);

//checked numbers now complete alert

var answer = ("Your " + type + " website will cost approximately $" + totalCost + "\n\ncall for details.\n");
alert(answer);
console.log(answer);



