/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//finding the volume of your cup or
//volume of a truncated cone


//create function

function cupVolume(h , bigR , lilR){
    var volCup = (Math.PI/3) * h * (bigR^2+(lilR*bigR)+ lilR);
    return volCup

}

//now prompt user to create variables

var height = parseInt(prompt("how tall is your cup"));

//validate

while(height === "" || isNaN(height)){

    height = prompt("only type numbers")

}
var bigDia = parseInt(prompt("how wide is the mouth of your cup"));

//validate

while(bigDia === "" || isNaN(bigDia)){

    bigDia = prompt("only type numbers")

}
var lilDia = parseInt(prompt("how wide is the base of your cup"));


//now convert diameter to radius

var bigRad = bigDia/2;
var lilRad = lilDia/2;

//create final variable and alert user

var finalVolume = cupVolume(height, bigRad, lilRad);
alert("the volume of your cup is " + finalVolume);