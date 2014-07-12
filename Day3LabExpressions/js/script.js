/*
 Brian Cobb
 WPF 1407
 7-11-2014
 Lab Expressions
 */

//calculate how much pizza each pertygoer will get

var numberSlicesPerPizza = 8;
var numberPeopleParty = 8;
var numberPizzasOrdered = 10;

//Slices * pizzas / people

var slicesPerPerson = numberSlicesPerPizza * numberPizzasOrdered / numberPeopleParty;

//output slices per person

console.log("Each person ate "+slicesPerPerson+" slices of pizza at the party");



