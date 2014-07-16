/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions wacky
 */

//alert("testing 1,2,3");


//number of combinations of ice cream
//

var flavors = prompt("how many flavors are there?");
var scoops = prompt("how many scoops would you like");
var toppings = prompt("how many toppings are there?");

//formula is flavors x (scoops x toppings + 1)

var combinations = flavors * scoops * toppings;

console.log(combinations);

