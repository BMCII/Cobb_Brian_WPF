/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//test is a is less than 5

var a = 8;

if (a<5){
    //if a is less than 5 following will run

    console.log("true")

} else {
    //then this code
    console.log("false")
}


//test if animal is a dog
//create VARIABLE asking if monkey has a name

var  monkeyName= ("yes");

var animal = prompt("what type of animal do you have?");

if (animal === "dog" || animal === "Dog"){
    console.log("Rover is a dog")

} else if (animal === "cat" || animal === "Cat") {
    console.log("wiskers is a cat")

} else if (animal === "monkey" && monkeyName != "yes"){
    console.log("george is a monkey")
    {

    }
} else if (animal === "monkey" && monkeyName === "yes"){
    var actualName = prompt("what is your monkeys name");
    console.log("would your monkey named " + actualName  + " like a banana")

}

else {
    console.log("good luck")
}


