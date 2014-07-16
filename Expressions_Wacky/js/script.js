/*
 Brian Cobb
 WPF 1407
 7/14/2014
Expressions Wacky
 */

//snack decider

var ingredient1 = prompt("Pick one\n\nchips or cookies");
var ingredient2 = prompt("Now pick one of these\n\ncrackers or cake");
var ingredient3 = prompt("Choose one\n\n" + ingredient1 + " or " + ingredient2);
var ingredient4 = prompt("Pick one\n\nIce cream or cheese spread");
var ingredient5 = prompt("now choose\n\nKetchup or cream cheese");
var ingredient6 = prompt("Another choice\n\n" + ingredient4 + " or " + ingredient5);
var ingredient7 = prompt("Getting there\n\npeanuts or candy");
var ingredient8 = prompt("which is better\n\nsprinkles or chocolate");
var ingredient9 = prompt("Last one\n\n" + ingredient7 + " or " + ingredient8);

console.log(ingredient3);
console.log(ingredient6);
console.log(ingredient9);

//now create answer alert

var answer = alert("Your snack is \n\n" + ingredient3 + " and " + ingredient6 +" with " + ingredient9 + " on top");



//now make array

var ingredients = [ingredient1, ingredient2, ingredient3];

console.log(ingredients);
var answer = alert(ingredients[0] + ingredients[1]);


//


//alert("testing 1,2,3");
