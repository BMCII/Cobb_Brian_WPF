/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//if student GPA is over 2.0 he can graduate

var gpa = 3;

if(gpa > 2){
    console.log("you graduate")

} else {
    console.log("you suck study more")
}

//Ternary
// (condition to test) ? code to run if true : code to run if false

(gpa>2)? console.log("you can graduate"): console.log("you fail");


//if a child is under ten then they will read green eggs and ham, otherwise they will read the time machine

var kidAge = 6;
var book;

book = (kidAge<10)?"green eggs and ham":"Time Machine";
console.log("your kid can read " + book);