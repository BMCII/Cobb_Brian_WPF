/*
 Brian Cobb
 WPF 1407
 7-11-2014
 Lab Expressions
 */

//calculate how much pizza each pertygoer will get

var numberSlicesPerPizza = 8;
var numberPeopleParty = 10;
var numberPizzasOrdered = 4;

//Slices * pizzas / people

var slicesPerPerson = numberSlicesPerPizza * numberPizzasOrdered / numberPeopleParty;

//output slices per person

console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party");


//Slices * pizzas % people

var numberSlicesSparkyGets = numberSlicesPerPizza * numberPizzasOrdered % numberPeopleParty;

console.log("Sparky got "+numberSlicesSparkyGets+" slices of pizza");