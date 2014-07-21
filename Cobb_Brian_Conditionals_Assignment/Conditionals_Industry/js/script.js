/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Conditional Personal
 */

//freelance price calculator




//alert("testing 1,2,3");

var basePrice = prompt("Is client website basic, ecommerce or a blog");
if (basePrice === "basic" || basePrice === "Basic"){
    basePrice = 500

} else if (basePrice === "ecommerce" || basePrice === "Ecommerce"){
    var products = prompt("How many products does the client have");
    (products>50)? basePrice = (products - 50)*10 + 1000 : basePrice = 1000;


} else {
    basePrice = 300

}

console.log(basePrice);

