/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions wacky
 */

//alert("testing 1,2,3");


//number of combinations of ice cream

//enter variables

var flavors = prompt("how many flavors are there?");
var scoops = prompt("how many scoops would you like");
var toppings = prompt("how many toppings are there?");

var flavorsNumber = parseInt(flavors);
var scoopsNumber = parseInt(scoops);
var toppingsNumber = parseInt(toppings);

//formula is flavors x (scoops x toppings + 1)
toppingsNumber = toppingsNumber+1;

console.log(toppings);

var combinations = flavorsNumber * scoopsNumber * (toppingsNumber);

console.log(combinations);

//now for the answer

var answer = ("There are " + combinations + " combinations of ice cream available");
alert(answer);

