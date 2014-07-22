/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditionals Wacky
 */

//alert("testing 1,2,3");

//how many cl0wns can fit in a car

var clownSize = prompt("are your clowns big or small");

var clownSizeNumber = 0;

(clownSize === "big" || clownSize === "Big") ? clownSizeNumber = 1 :  clownSizeNumber = 0.5;

var carSize = prompt("How many passengers does your car normally hold");

//we all know clowns can fit 1 and a half times more into a car
console.log(clownSizeNumber);


var answer = carSize * 1.5 / clownSizeNumber;
console.log(answer);





