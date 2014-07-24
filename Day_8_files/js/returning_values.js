/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//create function to calc area rectangle

function calcArea(w , h){

    //calculate ares
    var area = w*h;
    //console.log(area);

    //return variable are to main code
    return area;
}

//function call
//create var to catch return value

//user prompts
var width = prompt("lets calculate area rectangle\nwidth?");
var height = prompt("height?");

var results = calcArea(width , height);

console.log("the area is " + results);


//create a function for calc area circ

function circleArea(r){
    var area = 2*r*Math.PI;

    return area;
}

//ask user for radius

var rad1 = prompt("lets calc circ \n type radius");
var firstArea = circleArea(rad1);
console.log("the are of circ with r of " + rad1 + " is " + firstArea.toFixed(2));

//prompt user for another circle

var rad2 = prompt("please enter another radius");
var secondArea = circleArea(rad2);
console.log("the are of circ with r of " + rad2 + " is " + secondArea.toFixed(2));

var pizzaRadius = prompt("pizza radius?");
var cost = prompt("cost?");
//use existing function

var pizzaArea = circleArea(pizzaRadius);
var pizzaInchCost = pizzaArea / cost;

console.log("your pizza costs $" + pizzaInchCost.toFixed(2));