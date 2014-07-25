/*
 Brian Cobb
 WPF 1407
 7/14/2014
 procedures
 */

//alert("testing 1,2,3");


//this is a basic function

function calcAreaFunc(width , height){
    var area = width * height;
    return area;

}



//function call remember to catch returned value
var results = calcAreaFunc(6 , 7);

console.log(results);

//this is a basic procedure
//just a list of steps to do


function calcAreaProc(width , height){
    var area = width * height;
    console.log(area);

}


//function call the procedure
calcAreaProc(5 , 9);