/*
 Brian Cobb
 WPF 1407
 7-11-2014
 Lab Expressions
 */

//Slice of Pie part 1

//calculate how much pizza each pertygoer will get

var numberSlicesPerPizza = 8;
var numberPeopleParty = 10;
var numberPizzasOrdered = 4;

//Slices * pizzas / people

var slicesPerPerson = numberSlicesPerPizza * numberPizzasOrdered / numberPeopleParty;

//output slices per person

console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party");

//Slice of Pie part 2 what Sparky gets

//Slices * pizzas % people

var numberSlicesSparkyGets = numberSlicesPerPizza * numberPizzasOrdered % numberPeopleParty;

console.log("Sparky got "+numberSlicesSparkyGets+" slices of pizza");


//Average shopping bill

//variables
var week1Groceries = 100;
var week2Groceries = 50;
var week3Groceries = 100;
var week4Groceries = 100;
var week5Groceries = 100;

//Total spent on groceries = week1 + week2 + week3 + week4 + week5
//Average = total / 5

var totalSpentOnGroceries = (week1Groceries + week2Groceries + week3Groceries + week4Groceries + week5Groceries);
var averageWeeklyGrocerySpending = (totalSpentOnGroceries / 5);

//test
console.log(totalSpentOnGroceries);
console.log(averageWeeklyGrocerySpending);
//final
console.log("You have spent a total of $"+totalSpentOnGroceries+" on groceries over 5 weeks. That is an average of $"+averageWeeklyGrocerySpending+" per week.");


//Discounts

//Variables
var originalPrice = 10;
var discountPercentage = 10;
var description ="sweater";
var salesTaxPercentage = 5;

//figure dollar amount of discount and tax
var discount = (discountPercentage/ 100 * originalPrice);
var tax = (salesTaxPercentage / 100 * (originalPrice - discount));

//before and after tax 
var priceBeforeTax = (originalPrice - discount);
var priceAfterTax = (priceBeforeTax + tax);

//Test
console.log(discount);
console.log(tax);
console.log(priceBeforeTax);
console.log(priceAfterTax);

//final
console.log("your "+description+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, it is now $"+priceBeforeTax+" without tax, and $"+priceAfterTax+" with tax")