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
var topSpeedFactor = 0;
var heightFactor =0;
var eyeColorFactor = 0;
var headAcheFactor = 0;

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

console.log(topSpeedFactor);

var height = prompt ("in feet, how high is the roller coaster?");
    if (height > 200){
        heightFactor = 2

    } else if (height > 150){
        heightFactor = 1.5

    } else if (height > 100){
        heightFactor = 1.2

    } else {
        heightFactor = 1

    }


//validate
    while(height === "" || isNaN(height)){
    height = prompt("height must be a number")
    }

var eyeColor = prompt("what color are your eyes");
    if (eyeColor === "blue" || "Blue"){
        eyeColorFactor = 1.5

    } else if (eyeColor === "green" || "Green"){
        eyeColorFactor = 2

    }


var headAches = prompt("are you prone to headaches");
    if(headAches === "yes" || "Yes"){
        headAcheFactor = 2

    } else {
        headAcheFactor = 1
    }

var answer = getSick(topSpeedFactor , heightFactor , eyeColorFactor , headAcheFactor);

var sick;

sick = (answer<= 50)?"your probably not going to get sick":"don't do it you'll puke!";

alert(sick);

