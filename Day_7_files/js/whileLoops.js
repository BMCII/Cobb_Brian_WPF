/*
 Brian Cobb
 WPF 1407
 7/14/2014
 while loop
 */

//alert("testing 1,2,3");

//while loop loops through a code as long as a specific condition is true

//initionalize a counter variable
var counter = 300;

//set up while loop and condition to be met
while(counter <= 200){
    console.log("loop de loop" + counter);
    //change counting variable
    //if we don't we could get infinite loop
    counter ++ ;

}

console.log("ending counter " + counter );

//do while loop
//is extremely similar to the basic while loop main diff code will run then check condition
//always runs once

//counter var

var i = 20;

//now do while loop

do {
    console.log("the number is " + i);
    //change counter
    i++;

} while(i<10);