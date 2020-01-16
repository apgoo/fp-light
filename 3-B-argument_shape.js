// this function shape is one
// this function take a function as input and return output as function
// this is higher order function
function unary(fn) {
    return function one(arg) {
        return fn(arg)
    }
}

function binary(fn) {
    return function two(arg1,arg2) {
        return fn(arg1, arg2);
    }
}


// argument adopter (underline function)
// fit the argument shape 
// identity function
function underLineFn(...args) {
    return args;
}

var g = unary(underLineFn);
var h = binary(underLineFn);

g(1,2,3,4); // [1]
h(1,2,3,4); // [1,2]



/*
        HOF- HEIGHER ORDER FUNCTION
   # the function that get one or more input value of function {or} 
   # the function retrus return value as function is heigher order function

*/

    
/*
    # js don't care about the variadic input 
    # that means function gets input 3 input but the function define 4 parameter
    # function get 3 parameter but we give only one argument is not effect anthig 

*/

