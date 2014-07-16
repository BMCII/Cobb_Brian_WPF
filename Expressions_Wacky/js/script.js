/*
 Brian Cobb
 WPF 1407
 7/14/2014
Expressions Wacky
 */

//possible snack combinations

var ingredient1 = prompt("what is your favorite snack food? chips or cookies");
var ingredient2 = prompt("what is your second favorite snack food? cookies or cake");
var ingredient3 = prompt("what is your third favorite snack food?" + ingredient1 + " or" + ingredient2);
var ingredient4 = prompt("Why not give me one more snack food.");

console.log(ingredient3);

//now make array

var ingredients = [ingredient1, ingredient2, ingredient3];

console.log(ingredients);
var answer = alert(ingredients[0] + ingredients[1]);


//


//alert("testing 1,2,3");
