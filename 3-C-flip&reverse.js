////////////////////////////////////////////////
//          flip adapeter
function flip(fn) {
    return function fliping(arg1,arg2,...args) {
        return fn(arg2,arg1,...args);
    }
};

// argument adopter (underline function)
// fit the argument shape 
// identity function
function f(...args) {
    return args;
}

var g = flip(f);
g(1,2,3,4) // [2,1,3,4] first two flip



//////////////////////////////////////////////
//          reverse adapeter

function reverseArg(fn) {
    return function reversing(...args) {
        return fn(...args.reverse());
    }
}

var h = reverseArg(f);
h(1,2,3,4) //// [4,3,2,1] all args reverse
