/*
 Brian Cobb
 WPF 1407
 7/14/2014
 logical Operators
 */

//alert("testing 1,2,3");

//See if we can purchase a fancy TV

var budget = 500;
var tvPrice = 700;
var payCheck = 1500;

//if price of TV is less than  or equil to budget then we can buy TV

if(tvPrice <= budget){
    console.log("new T.V.")

} else {
    console.log("no T.V. for you")

}

//if paycheck is over 1200 buy anyway

if(payCheck > 1200){
    console.log("buy T.V")
} else {
    console.log("no T.V. for you")
}

//combine together
//tv must be in budget and paycheck over 1200

if(tvPrice<=budget && payCheck>1200){
    console.log("both true buy tv")
} else{
    console.log("keep saving")
}


//we won the lottery

var wonLottery = true;

if(tvPrice<=budget || payCheck>1200|| wonLottery){
    console.log("at least one is true buy tv")
} else{
    console.log("keep saving")
}





