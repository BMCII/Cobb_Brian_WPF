/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//how many times can you ride a roller coaster before getting sick
//create variables

var topSpeed = prompt("what is the top speed roller coaster in MPH?");
//validate
    while(topSpeed === "" || isNaN(topSpeed)){
    topSpeed = prompt("speed must be a number")
    }

var height = prompt ("how high is the roller coaster?");
//validate
    while(topSpeed === "" || isNaN(topSpeed)){
    topSpeed = prompt("height must be a number")
    }

var eyeColor = prompt("what color are your eyes");

var headAches = prompt("are you prone to headaches");

