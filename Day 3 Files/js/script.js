/*
Brian Cobb
WPF 1407
7-11-2014
Day 3 First File
 */

/*
    this is example of multi-line comment anything between
    the star and slash will not be affected.
 */

// Single line comment

// Example comment goes here

// alert() - creates pop up box
alert("we are in WPF Class and we are programing");

// console.log() - coders use to troubleshoot code
console.log("this is a console statement");


//Declare a variable
//use keyword var
var whatever1;  //Declaration of a variable
whatever1 = 42;  //Definition of a variable - giving it a value

// storageContainer = value; - define a variable

//Setup and define the variable in one step
var a = 2;  //Declaring and defining in one step

//check the value of the a variable
console.log(a);

//how do we add in JS?   +

a = a+3;

console.log(a);


//Declare a new variable
var b;

//Define b using variable a

b = a+3;

console.log (b);

//Simple math
//Find your age

//Create/Declare variable for year born

var yearBorn = 1974;

//age current year subtract year you were born
//create age variable

var age = 2014-yearBorn;

console.log(age);

//Talk about math
// +,-,*,/

//fina area of triangle
//base * height / 2
//create 2 variables one for base one for height

var base = 4;
var height = 5;
var areaOfTriangle = base * height / 2;

console.log(areaOfTriangle);

//modulo - %
//Give you remainder

//var remainder = 32/10
var remainder = 32%10;

console.log(remainder);

//find if odd or even

var evenOrOdd = 67%2;

console.log(evenOrOdd);

//Assignment operators

/*
= Assignment - "is"

add one to variable
a = a+1
a++;

-- subtract one
a-- is same as a-1

+= adds the number after the equals to the variable
a =+6; is the same as a = a+6

-= subtracts number
a -=; same as a = a-4

*= multiply by

/= divide by
 */

//string - text
//" is used for begining and end of string
//needs to distinguish between variables and names

var kermit = "light green";
var frogName = "kermit";

//Double quote or single
//Escape character \ in front of escape character

//can also do a new line inside of text


var phrase = 'I don\'t know.\nDo you?';

console.log(phrase);


//Boolean - useful for conditional
//either true or false
//light switches
var question = true;

// not the same as

var unTrue = false;

var nope = "true";

//order of operations
//PEMDAS - Parenthesis, Exponents, Multiply, Divide, Add, Subtract

//Find Quiz Averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

//find perimiter
// 2 * length = 2 * height


//create variable for length and height

var lengthRect = 7;
var heightRect = 6;
 //create variable for perimeter

var perimeterRect = 2*lengthRect + 2* heightRect ;

console.log("the perimeter of a rectangle with a length of "+lengthRect+" and a height of "+heightRect+" is "+perimeterRect + ".");

//Concatenation - combining text strings!

var firstName = "Kermit";
var lastName = "the Frog";

//concatinate first and last name into whole name

var wholeName = firstName + " " + lastName;
 console.log(wholeName);

var d = "6";
var e = 7;
var combine = d+e;
console.log(combine);














