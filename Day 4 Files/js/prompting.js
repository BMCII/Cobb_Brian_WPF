/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Prompting the user
 */

//alert("testing 1,2,3");

//ask user for input
//prompt();

//prompts user but we are not capturing data
//prompt("enter your year of birth");

//Correct way
//prompts always returns text strings

var userInput = prompt("enter your birth year");
console.log(userInput);

//calculate how old the user is

var age = 2014 - userInput;
console.log("your are "+ age  +" years old");
alert("your are "+ age  +" years old");

//calculate the area of rectangle
//height and width are needed from user
//explain to user what we are doing

alert("lets figure out the area of a triangle");
var height = prompt("to figure area rectangle \nwhat is height");
var width = prompt ("what is width");
var area = height * width;

console.log("the area of your rectangle is " + area);
alert("the area of your rectangle is " + area);

