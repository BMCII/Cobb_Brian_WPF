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

function inchesCubedToOunces(inch){
    var ounces = answer * 0.55411
    return ounces
}

//tell user unit of measurement

alert("all measurements are in inches");

//now prompt user to create variables

var height = parseInt(prompt("how tall is your cup"));

//validate

while(height === "" || isNaN(height)){

    height = parseInt(prompt("only type numbers"))

}
var bigDia = parseInt(prompt("how wide is the mouth of your cup"));

//validate

while(bigDia === "" || isNaN(bigDia)){

    bigDia = parseInt(prompt("only type numbers"))

}
var lilDia = parseInt(prompt("how wide is the base of your cup"));

//validate

while(lilDia === "" || isNaN(lilDia)){

    lilDia = parseInt(prompt("only type numbers"))

}


//now convert diameter to radius

var bigRad = bigDia/2;
var lilRad = lilDia/2;

//create final variable and alert user

var finalVolume = cupVolume(height, bigRad, lilRad);

var answer = finalVolume.toFixed(2);

alert("the volume of your cup is " + answer + " inches³");

//now change to ounces

var convert = prompt("do you want to convert this to ounces?");


var conversion;

conversion = (convert === "yes" || convert === "Yes")?  inchesCubedToOunces(answer):alert("have a nice day");

alert (conversion.toFixed(2) + " ounces");