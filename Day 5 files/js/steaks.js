/*
 Brian Cobb
 WPF 1407
 7/14/2014
 steak temperatures
 */

//alert("testing 1,2,3");
/*
 Extra-rare or Blue (bleu) 	very red and cold 	                46–49 °C 	115–120 °F
 Rare (saignant) 	        cold red center; soft 	            52–55 °C 	125–130 °F
 Medium rare (à point)    	warm red center; firmer 	        55–60 °C 	130–140 °F
 Medium (demi-anglais)  	pink and firm 	                    60–65 °C 	140–150 °F 	145 °F and rest for at least 3 minutes
 Medium well (cuit) 	    small amount of pink in the center 	65–69 °C 	150–155 °F
 Well done (bien cuit) 	    gray-brown throughout; firm 	     ,71 °C+ 	160 °F+ 	160 °F for ground beef


 */
//is my steak done

//var steakTemp = 152;
var steakTemp = prompt ("what temperature is your steak?");




if(steakTemp<115){
    console.log("uncooked Meat")

} else if(steakTemp <= 120){
    console.log("Extra-rare");

} else if(steakTemp <= 130){
    console.log("Rare");
} else if(steakTemp <= 140){
    console.log("medium Rare");
}else if(steakTemp <= 150) {
    console.log("Medium");
}else if(steakTemp <= 155) {
    console.log("Medium well");
}else if(steakTemp <= 155) {
    console.log("Well done");
}else {
    console.log("burnt")
}






