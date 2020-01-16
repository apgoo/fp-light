//////////// point-free example

// both two argmants are the same thing with call back
getPersion(function personName(persion) {
    return renderPersion(persion);
});

// instade do this 
getPersion(renderPersion);
// this is called equational resioning 
// both two parameter has inderchangeabl even it has diffrent shape
// equationaly persion parameter are same 


//////////////////////////////////////////////////////
// without point-free
function isOdd(v) {
    return v % 2 == 1;
}

function isEven(v) {
// we did not use same approch as isOdd()
// if we use v % 2 == 0 it will not any relation 
// - to that function 
// both V parameter is explicit code
// don't use the point two times(V parameter) 
// so we will make some declarative with implicit   
    return !isOdd(v);
}

isEven(4);


///////////////////////////////////////////////////////
// point free

// negation function with make relation with two  function
function not(fn) {
    return function negate(...args) {
        return !fn(...args);
    }
}

var isEvens = not(isOdd);

isEven(6);

/*
    this code is more implicit and declarative
    
*/ 