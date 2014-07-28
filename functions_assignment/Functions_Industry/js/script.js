/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Functions Industry
 */

//alert("testing 1,2,3");


//calculating columns for web site

//create function

function columnsSize(columns , border , webPage , webPageBorder){
    var columnWidth = ((webPage - webPageBorder )/(columns + border));
    return columnWidth

}

var columns = prompt("how many columns do you need?");
var border = prompt("how many pixals wide is your border for each column?");
var webPage = prompt("How many pixals wide is your web page?");
var webPageBorder = prompt("how many pixals is your web page border?");

var finalSize = columnsSize(columns , border , webPage , webPageBorder);
var answer = Math.round(finalSize);

alert(answer);