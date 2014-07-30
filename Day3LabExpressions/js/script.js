/*
 Brian Cobb
 WPF 1407
 7-11-2014
 Lab Expressions
 */

//Slice of Pie part 1

//calculate how much pizza each party goer will get

var numberSlicesPerPizza = prompt("How many slices per pizza are there?");

while(numberSlicesPerPizza === "" || isNaN(numberSlicesPerPizza)){

    numberSlicesPerPizza = prompt("only type numbers")

}
var numberPeopleParty = prompt("How many people are at the party");

while(numberPeopleParty === "" || isNaN(numberPeopleParty)){

    numberPeopleParty = prompt("only type numbers")

}
var numberPizzasOrdered = prompt("how many pizzas were ordered");

while(numberPizzasOrdered === "" || isNaN(numberPizzasOrdered)){

    numberPizzasOrdered = prompt("only type numbers")

}



//Slices * pizzas / people

var slicesPerPerson = Math.floor(numberSlicesPerPizza * numberPizzasOrdered / numberPeopleParty);

//output slices per person

alert("Each person ate "+ slicesPerPerson +" slices of pizza at the party");

//Slice of Pie part 2 what Sparky gets

//Slices * pizzas % people

var numberSlicesSparkyGets = numberSlicesPerPizza * numberPizzasOrdered % numberPeopleParty;

alert("Sparky got "+ numberSlicesSparkyGets +" slices of pizza");


//Average shopping bill

//variables

var grocerySpending = [];
grocerySpending [0] = prompt("How much did you spend on groceries for week 1?");

while(grocerySpending[0] === "" || isNaN(grocerySpending[0])){

    grocerySpending[0] = prompt("only type numbers")

}
grocerySpending [1] = prompt("How much did you spend on groceries for week 2?");

    while(grocerySpending[1] === "" || isNaN(grocerySpending[1])){

    grocerySpending[1] = prompt("only type numbers")

}
grocerySpending [2] = prompt("How much did you spend on groceries for week 3?");

    while(grocerySpending[2] === "" || isNaN(grocerySpending[2])){

    grocerySpending[2] = prompt("only type numbers")

}
grocerySpending [3] = prompt("How much did you spend on groceries for week 4?");

    while(grocerySpending[3] === "" || isNaN(grocerySpending[3])){

    grocerySpending[3] = prompt("only type numbers")

}
grocerySpending [4] = prompt("How much did you spend on groceries for week 5?");

    while(grocerySpending[4] === "" || isNaN(grocerySpending[4])){

    grocerySpending[4] = prompt("only type numbers")

}


//Total spent on groceries = week1 + week2 + week3 + week4 + week5
//Average = total / 5

var totalGroceries = 0;

for(var i = 0; i<grocerySpending.length ; i++){
    totalGroceries += parseInt(grocerySpending[i]);
}

console.log(totalGroceries);

var averageWeeklyGrocerySpending = (totalGroceries / grocerySpending.length);

alert(averageWeeklyGrocerySpending);

//test

console.log(averageWeeklyGrocerySpending);
//final
alert("You have spent a total of $"+totalGroceries+" on groceries over 5 weeks. That is an average of $"+averageWeeklyGrocerySpending+" per week.");


//Discounts

//Variables

function discountCalculator(originalPrice,discountPercentage,description) {

}

/*

var originalPrice = 100;
var discountPercentage = 15;
var description ="sweater";
var salesTaxPercentage = 9;

//figure dollar amount of discount and tax
var discount = (discountPercentage/ 100 * originalPrice);
var tax = (salesTaxPercentage / 100 * (originalPrice - discount));
//before and after tax
var priceBeforeTax = (originalPrice - discount);
var priceAfterTax = (priceBeforeTax + tax);

//Test
//console.log(discount);
//console.log(tax);
//console.log(priceBeforeTax);
//console.log(priceAfterTax);

//final
console.log("your "+description+" was originally $"+originalPrice+", but after a "+discountPercentage+"% discount, it is now $"+priceBeforeTax+" without tax, and $"+priceAfterTax+" with tax")
*/