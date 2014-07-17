/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Expressions Personal
 */

//alert("testing 1,2,3");

//how to calculate time to save money
//income - expenses - desired percent to save

alert("savings calculator");
var savingsGoal = prompt("How much would you like to save?");
var income = prompt("what is your income per pay period?");
var expenses = prompt("what are your total expenses per pay period?");
var percentSavings = prompt("what percent of your disposable income would you like to save");

//need parseInt to change text string to number

var savingsGoalNumber = parseInt(savingsGoal);
var incomeNumber = parseInt(income);
var expensesNumber = parseInt(expenses);
var percentSavingsNumber = parseInt(percentSavings);

console.log(savingsGoal);

//made an array

var variables = [savingsGoalNumber, incomeNumber, expensesNumber, percentSavingsNumber];

//looked up a math thing so there is no decimal and it rounds up = math.ceil(time)

//savingsGoal / (( income - expenses ) * ( percentSavings / 100 ))

var time = variables[0] / ((variables[1] - variables[2]) * (variables[3] / 100));
var answer = alert("It will take " + Math.ceil(time) + " pay periods to meet your goal");
