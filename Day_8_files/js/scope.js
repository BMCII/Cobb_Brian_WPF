/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//variable scope
//variables in and out function

//try not to use same variable names, but in large files almost impossible

//create var for width in main code
//in  MAIN code this is called scoped outside the function

var width =5;

//create function calculates perimeter of rectangle

function calcPeri(){

    //create another var called width
    //scoped to the function calcPeri
    var width = 10;

    console.log("inside of function " + width);
    var height = 20;
    var perimeter = width * 2 + height * 2;
    console.log("inside of function, the perimeter is " + perimeter)
}




console.log("before call "+ width);
//function call

calcPeri();
console.log("after call " + width);

//cannot access variables inside of function

