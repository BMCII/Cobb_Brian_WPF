/*
 Brian Cobb
 WPF 1407
 7/14/2014
 Arrays
 */

//alert("testing 1,2,3");

var fruit = ["banana","pear","peach","tomato"];


//length

console.log(fruit.length);

console.log(fruit);

//add to end of array

fruit[4] = ("cherry");
console.log(fruit);
fruit[fruit.length] = ("apple");
console.log(fruit);

//common so function called push
//push() adds to next open spot in array

fruit.push("mango");
console.log(fruit);

//to remove LAST item from array use pop()
//you can catch remove item

var removedFruit = fruit.pop();
console.log(fruit);

console.log(removedFruit);