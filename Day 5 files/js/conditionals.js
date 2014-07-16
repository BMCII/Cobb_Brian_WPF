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

//if statement is good for checking 1 condition
//if else chooses between 2 blocks of code
//else if chooses between MULTIPLE blacks of code

if(oldEnough){
    //inside here will run if condition is true
    console.log("you can ride the coaster")
}

console.log("what comes after");

//relational expressions

//if kid is over 48 inches he can ride

var kidHeight = 50;
var minHeight = 48;
var sneakerLift = 2;

if(kidHeight>minHeight){
    console.log("you can ride")

}  else if (kidHeight + sneakerLift > minHeight){
    //this code will run if else statement is true
    console.log("you are tll enough to ride the coaster if you cheat")

} else {

    //code will run if condition is false
    console.log("go away")
}

//what if we had sneaker lifts

/*var sneakerLift = 2;
//test if kid tall enough with lifts

if(kidHeight + sneakerLift>minHeight){

    console.log("you are tll enough to ride the coaster if you cheat")

}
*/
