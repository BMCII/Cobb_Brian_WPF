/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//how many times can you ride a roller coaster before getting sick
//create variables

function getSick(topS , h , eye , head){
    var sick = (topS + h) * eye * head;
    return sick

}

var topSpeed = prompt("what is the top speed roller coaster in MPH?");
//validate
    while(topSpeed === "" || isNaN(topSpeed)){
    topSpeed = prompt("speed must be a number")
    }

    if (topSpeed > 100){
        topSpeedFactor = 35

    } else if (topSpeed > 75){
        topSpeedFactor = 25

    } else if (topSpeed > 50){
        topSpeedFactor = 20

    } else {
        topSpeedFactor = 15
    }

var height = prompt ("how high is the roller coaster?");


//validate
    while(topSpeed === "" || isNaN(topSpeed)){
    topSpeed = prompt("height must be a number")
    }

var eyeColor = prompt("what color are your eyes");
    if (eyeColor === "blue" || "Blue"){
        chanceSick *= 1.5

    } else if (eyeColor === "green" || "Green"){
        chanceSick *= 2

    }


var headAches = prompt("are you prone to headaches");

