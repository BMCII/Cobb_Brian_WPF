/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Final Exam WPF
 */

//alert("testing 1,2,3");


var costItem = prompt("what is the cost of your item");

//validate
while(costItem === "" || isNaN(costItem)){

    costItem = prompt("cost can only be numbers")

}
