/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditional Personal
 */

//freelance price calculator




//alert("testing 1,2,3");
var totalPrice = 0;
var basePrice = prompt("Is client website basic, ecommerce or a blog");
if (basePrice === "basic" || basePrice === "Basic"){
    basePrice = 500

} else if (basePrice === "ecommerce" || basePrice === "Ecommerce"){
    var products = prompt("How many products does the client have");
    (products>50)? basePrice = (products - 50)*10 + 1000 : basePrice = 1000;


} else {
    basePrice = 300

//calculate extra cost for extra pages at 100 each

}

// set total price as base price

totalPrice = basePrice;
var extraPages = prompt("does client require extra pages");
if (extraPages === "yes" || extraPages === "Yes"){
    var numberOfExtraPages = prompt("How many extra pages are needed?");
    var numberOfExtraPagesNumber = parseInt(numberOfExtraPages);
    totalPrice += numberOfExtraPagesNumber * 100
}

var rush = prompt("Did client request a rush?");

if (rush === "yes" || rush === "Yes"){
    totalPrice = totalPrice + (totalPrice * 0.2)

}



//console.log(basePrice);
console.log(totalPrice);
