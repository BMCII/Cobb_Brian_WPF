/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions_industry
 */

//alert("testing 1,2,3");

//how much of disposable income goes to savings
//income - expenses - desired percent to save

alert("savings calculator");
var savingsGoal = prompt("How much would you like to save?");
var income = prompt("what is your income per pay period?");
var expenses = prompt("what are your total expenses per pay period?");
var percentSavings = prompt("what percent of your disposable income would you like to save");

//savingsGoal / (( income - expenses ) * ( percentSavings / 100 ))
var time = savingsGoal / ((income - expenses) * (percentSavings / 100));
var answer = alert("It will take " + time + " pay periods to meet your goal");
