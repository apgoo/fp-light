{
// value assignment into const is not change the value
// if assign array to const, some nuans there
    const shippingPrice = 6.50;
    const updateOrder = compose(
        saveOrderTotal,
        computeOrderTotal(basePrice),
        increaseShipping
    );
    updateOrder(shippingPrice);

}


/* 
## assign a primitive value to the const key word it's not a big deal
## assign object or array is that value gonna be change
## const is say assignment is not gonna be change, a value can change
## people thing value is not gonna change

## assign function to the const. function is actually an object 
it gonna change

&& totlay the point is when use const those kind of the code reader can confused
cuz only 6 line of code cannot mutate the value 


## assignment immutability is not such big deal - it is in laxxical scope
## value immutability thing is a big deal - arr or obj are refreance type it portable to use
## - so than can be change any where
*/