/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Final Exam WPF
 */

//alert("testing 1,2,3");


var costItem = parseInt(prompt("what is the cost of your item"));

//validate
while(costItem === "" || isNaN(costItem)){

    costItem = parseInt(prompt("cost can only be a number"))

}
 var discountPercent = parseInt(prompt("enter discount percent"));

//validate

while(discountPercent === "" || isNaN(discountPercent || discountPercent < 0 || discountPercent >= 100)){

    discountPercent = parseInt(prompt("discount must a number and between 0 and 100"));

}

//create function

function discountCalculator(cost , discount){
    var discountPrice = cost - cost * (discount / 100);
    return discountPrice

}

//call function

var discountedPrice = discountCalculator(costItem , discountPercent);

//console.log answer

console.log ("with a discount of " + discountPercent.toFixed(2) + " percent your item that originally costs " + costItem.toFixed(2)  + " now costs $" + discountedPrice.toFixed(2));
