/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//It takes 8.666666667 bee stings per pound to kill an animal.
//Calculate how many bee stings are needed to kill an animal in a function


function stingsToKill(victimWeight){
    var death = victimWeight * 8.666666667;
    return death;

}

var victim1 = prompt("How much does the animal weigh?");
var totalDeath = stingsToKill(victim1);

alert("It takes " + totalDeath.toFixed(2) + " bee stings to kill this animal.");


//Circumference of circle


function circCirc(rad){
    var circle = 2 * Math.PI * rad
    return circle
}