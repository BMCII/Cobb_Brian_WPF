/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Functions Industry
 */

//alert("testing 1,2,3");


//calculating columns for web site

function columnsSize(columns , border , webPage){
    var columnWidth = ((webPage - webPageBorder)/(columns + border));
    return columnWidth

}

var columns = ("how many columns do you need?");
var border = ("how many pixals wide is your border for each column?");
var webPage = ("How many pixals wide is your web page?");
var webPageBorder = ("how many pixals is your web page border?");