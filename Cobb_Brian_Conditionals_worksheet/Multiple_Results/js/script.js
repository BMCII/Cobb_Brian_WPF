/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Check the Login
 */

//alert("testing 1,2,3");

var usernameEntered = prompt("Enter Username");
var passwordEntered = prompt("Enter Password");

var correctUsername = ("ElMazorca");
var correctPassword = ("theCobb");

if(usernameEntered === correctUsername && passwordEntered === correctPassword){
alert("Welcome " + correctUsername)

} else if(usernameEntered != correctUsername){
    alert("User not found, try again");

//all but one possibility is covered else statement will work


} else {
    alert("Password does not match our records")
}






