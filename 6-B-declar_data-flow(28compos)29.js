// normal function 
function minus2(x) { return x - 2 };
function trible(x) { return x * 3 };
function increment(x) { return x + 1 };



// compose utility
// we could make more shippingRate with different value in compose
// compose is more declarative and ponit free way
// like function making function 
function composeThree(fn3,fn2, fn1) {
    return function compose(...args) {
        return fn3(fn2(fn1(args)));
    }
}


// function argumet order is matter 
// compose the function order is right to left
// we could make more shippingRate with different value in 
var shippingRate = composeThree(minus2, trible, increment);
