/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

var areaResults2 = triangle(4,5);
console.log(areaResults2);

//anon function

var anonResults2 = triangle(2,9);
console.log(anonResults2);

//NO GO

//anonymous functions
//very popular in jQuery and js
//object oriented programing
//both styles of functions work
//coding style
//quick and easy

//create anon function

var triAreaAnon = function(b,h){
    var area = .5 *b*h;
    return area;
}

//create a function for a triangle

//normal
function triangle(b,h){
    var area = .5 *b*h;
    return area;
}

var areaResults = triangle(6,7);
console.log(areaResults);

var anonResults = triAreaAnon(3,8);
console.log(anonResults);