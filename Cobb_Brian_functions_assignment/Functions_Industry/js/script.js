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
    var columnWidth = ((webPage - webPageBorder * 2 )/(columns + border * columns));
    return columnWidth

}

//now variables

var columns = parseInt(prompt("how many columns do you need?"));

//validate

while(columns === "" || isNaN(columns)) {
    columns = parseInt(prompt("only type numbers"))
}

var border = parseInt(prompt("how many pixals wide is your border for each column?"));

//validate

    while(border === "" || isNaN(border)) {

        border = parseInt(prompt("only type numbers"))
    }

var webPage = parseInt(prompt("How many pixals wide is your web page?"));

//validate

    while(webPage === "" || isNaN(webPage)) {

        webPage = parseInt(prompt("only type numbers"))
    }

var webPageBorder = parseInt(prompt("how many pixals is your web page border?"));

//validate

    while(webPageBorder === "" || isNaN(webPageBorder)) {

        webPageBorder = parseInt(prompt("only type numbers"))
    }

//call function

var finalSize = columnsSize(columns , border , webPage , webPageBorder);

//round answer

var answer = Math.round(finalSize);

//alert user

alert(answer);