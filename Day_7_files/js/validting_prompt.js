/*
 Brian Cobb
 WPF 1407
 7/14/2014
validating prompts
 */

//alert("testing 1,2,3");

var min = prompt("please type in a min number");

//test min variable to see if user left it blank

if (min===""){
    //user typed nothing
    //reprompt user
    console.log("you did not enter anything");
    min= prompt("you must type a number, do not leave blank");

}

//check user types number
//isNaN()
//returns a boolean - Text = true Number = false


if(isNaN(parseInt(min))){
    console.log("we are in the if loop");
    //re-prompt the user
    min = prompt("please type in only number")
}



//console.log(isNaN(parseInt(min)));




//loops for validating max value

var max = prompt("please type max value");
/*
while (max === ""){
    max = prompt("please don't leave blank");
    //this checks for blank

}
//this checks for number

while(isNaN(max)){
    //re-prompt user tell them no text
    max = prompt("please use only numbers")

}
*/
while(max === "" || isNaN(max)){

    max = prompt("only type numbers")

}




console.log(min);



//ask user for yes or no



var result = ("please type only yes or no");

while(result != "yes"  && result != "no" && result != "yes" && result != "No"){
    result = prompt("type yes or no")

}


//validate and ask with a do while

do{
    var whatever = prompt("type any number")

} while (isNaN(whatever) || whatever === "");



console.log(result);