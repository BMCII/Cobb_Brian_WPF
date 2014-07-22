/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

//can bit 4 people a day they become zombies next day
//how many zombies 8 days


var numberOfZombies = 1; //number of zombies
var numBites = 4;        //number of bites daily
var days = 10;           //number of days

for(var i = 1; i<=days;i++){
    //how many new zombies get made each day
    var newZombies = numberOfZombies * numBites;
    //how many zombies
    numberOfZombies = numberOfZombies + newZombies; //numZombies += new zombies
    console.log ("at the end of day # " + i +" there are " + numberOfZombies + " Zombies")

}