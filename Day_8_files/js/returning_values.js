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


//