/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");
 //round() normal rounding

var num1 = 9.5444;
console.log(num1);
console.log(Math.round(num1));

//floor() rounds down

var num2 = 6.9;
console.log(num2);
console.log(Math.floor(num2));

//ceil()  rounds up

var num3 = 4.8;
console.log(num3);
console.log(Math.ceil(num3));

//random()  returns number between 0-almost 1
var num4 = Math.random();
console.log(num4);

//numbers between 0 and 10

var num5 = Math.random()*10;
console.log(num5);

//integer between 0-100
var num6 = Math.round(Math.random()*100);
console.log(num6);

//random number between 2 values

//math.random()*(max-min)+min

//50-80
var num7 = Math.round(Math.random()*(80-50)+50);
console.log(num7);

//math object constant
//constants are uppercase
//Math.PI
// circ. = 2PIr

var radius = 7;
var curCir = 2* Math.PI * radius;
console.log("curc = " + curCir.toFixed(2));

//specific decimal toFixed()

