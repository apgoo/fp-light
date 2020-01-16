/////////////////////////////////////////
// (i) assignment immutability (ii-  value immutability)

var basePrice = 89.99;

// it is not a variable. it is placeholder for a value
// not call a variavle but it symbolic representation of value 
const shippingPrice = 6.50;


// this value not mutate it was re-assign the value
// did not change the value, assign new value
basePrice += 5.00; // allowed to change


shippingPrice *= 1.05; // not allowed 


// CONST :: note
// const has some rule const did allow to declare a const with out it's value
// when declare later we assign the value is not allowed cuz it has two state
// undefien state to define



// ## immutability is obiouse to the programme
// ## immutability means things cannnot change accitendly
// ## immutability what really mean is the things can needs to occour 
// ## intentinally,should not be accitendly, we should not be aware of it



////////////////////////////////////////////////////////////////////
// other way to change const the value

// FB programmers doing this way 
// passs the var or const as a argumetn
// change the value and assign in to new var
function basePriceUpdate(price) {
    return price + 5; 
}

basePriceUpdate(basePrice);


function shippingPriceUpdate(val) {
    return val * 2;
}

shippingPriceUpdate(shippingPriceUpdate);