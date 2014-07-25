/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//create 3 functions 1 for area of rectangle other for perimeter




//create var for givens

var height = prompt("what is the height?");
var width = prompt("what is the width");

//function call area

var areaResult = areaRect(height , width);

//console the answer
console.log(areaResult);

//function call perimeter

var periResult = periRect(height,width);
console.log(periResult);

//create area function

function areaRect(h , w){
    //calc area
    var area = h*w;
    return area

}



//create the perimeter function
function periRect(h,w){
    var peri = 2*h + 2*w;
    return peri;
}

//function call for combining
var arrayResults = createArray(areaResult,periResult);

console.log (arrayResults);


//create a function that will return multiple values

function createArray(area,peri){
    //create array from area and perimeter

    var arrayName  = [area,peri];
    //return array

    return arrayName
}