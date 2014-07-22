/*
 Brian Cobb
 WPF 1407
 7/14/2014
 looping Arrays
 */

//alert("testing 1,2,3");

var names = ["Scooby","Shaggy","Fred","Velma","Daphne","Scrappy"];

//cycle through each of them tell they solved case

console.log(names.length);

for(var i = 0; i<names.length; i++){
    console.log("you solved the case "+names[i])

}


//array of bills and add them

var bills = [50,10,5,20,10];
var total = 0;

for(var j = 0 ; j<bills.length; j++){
    //total = total + bills[j];
    //am only concerned with bills over 15
    if(bills[j]>15){
        total += bills[j];

    }

}
console.log(total);
