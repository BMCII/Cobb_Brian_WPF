/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions_industry
 */

//alert("testing 1,2,3");

//how to calculate time to save money
//income - expenses - desired percent to save

alert("savings calculator");
var savingsGoal = prompt("How much would you like to save?");
var income = prompt("what is your income per pay period?");
var expenses = prompt("what are your total expenses per pay period?");
var percentSavings = prompt("what percent of your disposable income would you like to save");

//need parseInt in case user inputs more than numbers

var savingsGoalNumber = parseInt(savingsGoal);
var incomeNumber = parseInt(income);
var expensesNumber = parseInt(expenses);
var percentSavingsNumber = parseInt(percentSavings);

//savingsGoal / (( income - expenses ) * ( percentSavings / 100 ))

var time = savingsGoalNumber / ((incomeNumber - expensesNumber) * (percentSavingsNumber / 100));
var answer = alert("It will take " + time + " pay periods to meet your goal");