/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Argument
 */

//alert("testing 1,2,3");

//arguments -> in function call -> goes into function
//Paremeters -> in function definition -> catch incomeing arguments

//function calc area rectangle

//w and h are parameters same as declaring variables and are scoped to function

function calcArea(w , h){

    //create var for height , width , and area

    //var width = 20;
    //var height = 10;
    //var are = height * width

    //create var area using parimeters
    var area = w*h;
    console.log(area)
}

calcArea(20,10);
calcArea(5,6);

//add arguments and parameters
//make function more flexible