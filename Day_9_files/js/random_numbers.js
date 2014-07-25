/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");



//create a function that accepts min and max number and returns random number between
//math.round(Math.random()*(max-min) + min;


function randomNumberGenerator (max , min ) {
    var random = Math.round(Math.random()*(max-min) + Number(min));
    return random

}

var userMin = prompt("enter min number");

while( userMin === "" || isNaN(userMin)) {

    userMin = parseInt( prompt("Enter only numbers"));
}

var userMax = prompt("enter max number");

while(userMax === "" || isNaN(userMax)) {

    userMax = parseInt( prompt("Enter only numbers"));
}



var answer = randomNumberGenerator(userMax , userMin);

alert("your random number between " + userMin + " and " + userMax + " is " + answer);