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



var victim1 = parseInt(prompt("How much does the animal weigh?"));


while(victim1 === "" || isNaN(victim1)) {

    victim1 = parseInt( prompt("Enter only numbers"));
}

var totalDeath = stingsToKill(victim1);

console.log(victim1 + 10);
alert("It takes " + totalDeath.toFixed(2) + " bee stings to kill this animal.");


//Circumference of circle



function circCirc(rad){
    var circle = 2 * Math.PI * rad;
    return circle
}

var radius = parseInt(prompt("what is the radius?"));
var answer = circCirc(radius);


while(radius === "" || isNaN(radius)) {

    radius = parseInt(prompt("Enter only numbers"));
}
alert("The circumference of the circle is " + answer.toFixed(2));



