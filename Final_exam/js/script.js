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
 var discount = parseInt(prompt("enter discount percent"));

//validate

while(discount === "" || isNaN(discount || discount < 0 || discount >= 100)){

    discount = parseInt(prompt("discount must a number and between 0 and 100"));

}
