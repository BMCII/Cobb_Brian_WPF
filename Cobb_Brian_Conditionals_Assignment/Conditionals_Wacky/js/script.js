/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditionals Wacky
 */

//alert("testing 1,2,3");

//how many cl0wns can fit in a car

var clownSize = prompt("are your clowns big or small or a mix");


var clownSizeNumber = 0;
(clownSize === "big" || clownSize === "Big") ? clownSizeNumber = 1 :  clownSizeNumber = 0.5;

if(clownSize === "mix" || clownSize === "Mix") {
    clownSizeNumber = 0.75
}

//clowns with blue wigs take up no room in cars

var blueWigClowns = prompt("do more than two clowns have blue wigs?");


var carSize = prompt("How many passengers does your car normally hold");
carSize = parseInt(carSize);

//we all know clowns can fit 1 and a half times more into a car

console.log(clownSizeNumber);


var answer = carSize * 1.5 / clownSizeNumber;
if(blueWigClowns === "yes" || "Yes"){
    answer += 3
}
console.log(answer);

alert("your car can fit " + answer +" of these clowns in your car.");





