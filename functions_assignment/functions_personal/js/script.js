/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

alert("testing 1,2,3");

//finding the volume of your cup or
//volume of a truncated cone

function cupVolume(h , bigD , lilD){
    var cupVol = (Math.PI/3)(h)(bigD^2+(lilD*bigD)+ lilD)
    return cupVol

}

var height = prompt("how tall is your cup");
var bigDia = prompt("how wide is the mouth of your cup");
var lilDia = prompt("how wide is the base of your cup");
var bigRad = bigDia/2;
var lilRad = lilDia/2;

var finalVolume = cupVolume(height, bigRad, lilRad);