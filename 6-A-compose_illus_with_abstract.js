// normal function 

function minus2(x) { return x - 2 };
function trible(x) { return x * 3 };
function increment(x) { return x + 1 };

// this code is more imparitive code
// temp vaible each time assign some return value
// this kind of stuff is more twist owr brain
var basePrice = 1;
var temp = increment(4);
temp = trible(temp);
var totalCost = basePrice + minus2(temp);

console.log(totalCost);



////////////////////////////////////////////////
// function with compose

// this is an other kind of way to improve our code
// this is call function composition 
// one function call return value givs the other function input
// this step is good but not enough  
totalCost = basePrice + minus2(trible(increment(4)));




///////////////////////////////////////////////////
// abstraction 

// shippingRate rate name is sematic boundary for two saparated things
function shippingRate(x) {
//  this line of code how to do things    
//  one pices of saparate
    return minus2(trible(increment(x)));
}

// this line of code what would to do 
// line is more clear then previous Ex
// another thing of saparation
totalCost = basePrice + shippingRate(4);

/*

 abstraction is saparate them  into two things and make
 them create some sematic relationship b/w the two things.

 abstraction is not about hiding things rather it make some saparation b/w
 things make them some ralationship

*/