/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Basic files
 */

//alert("testing 1,2,3");

//function random dice roll

function randomDie(){
    //calculate random integer 1 - 6

    var die = Math.round(Math.random()*(6-1) + 1);
    //return die
    return die
}

//create function to check dice

function diceCheck(d1,d2,d3,d4,d5){
    if(d1===d2 && d2===d3 && d3 === d4 && d4 === d5){
        //all dice same you win
        var results = "won";
        return results
    } else {
        var results = "lose";
        return results
    }


}

//to count how many times we loop we create a counter var

var counter = 0;



//create loop for as long as user has not won
do{
//get 3 dice

    var die1 = randomDie();
    var die2 = randomDie();
    var die3 = randomDie();
    var die4 = randomDie();
    var die5 = randomDie();


//check if dice are the same

var diceResults = diceCheck(die1,die2,die3,die4,die5);

console.log(diceResults);
    counter ++


}while(diceResults !="won");

console.log("it took " + counter + " number of times for the dice to mach");







