/*
 Brian Cobb
 WPF 1407
 7/14/2014
 conditionals
 */

//alert("testing 1,2,3");

//basic conditional

//boolean variable
var oldEnough = true;

//if child is old enough, print to consol he can ride coster

if(oldEnough){
    //inside here will run if condition is true
    console.log("you can ride the coaster")
}

console.log("what comes after");

//relational expressions

//if kid is over 48 inches he can ride

var kidHeight = 47;
var minHeight = 48;

if(kidHeight<minHeight){
    console.log("you can ride")

}

//what if we had sneaker lifts

var sneakerLift = 2;
//test if kid tall enough with lifts

if(kidHeight + sneakerLift>minHeight){

    console.log("you are tll enough to ride the coaster if you cheat")

}
