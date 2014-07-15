/*
 Brian Cobb
 WPF 1407
 7/14/2014
 casting
 */

//alert("testing 1,2,3");
//casting a variable means treating variable like another

/*
var stringVAr = "6";

var result = 7 + stringVAr;

console.log(result);
*/

//Number() - treats inside like number

var stringVAr = "6";

var result = 7 + Number(stringVAr);

console.log(result);

//user prompt

var userInput = prompt("how old are you");

//how old will the user be in 10 years

var futureAge = Number(userInput) + 10;

console.log(futureAge);

var yearBorn = prompt("year you were born");
var age = 2014 - yearBorn;

console.log(age);

//cast a number as a string

var areaCode = 407;
var firstPart = 111;
var secondPart = 2222;

//

var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);
console.log (phoneNumber);


//Parsing an integer

//parseInt() - looks through a text string and returns an integer
//Only works if text string starts with that number
//If first character is not a number then returns NAN not a number
//only returns first number

var a = parseInt("40 years old");
console.log(a);
var b = parseInt ("I am 40 years old");
console.log(b);