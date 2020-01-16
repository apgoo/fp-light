function mod(y) {
    return function(x) {
        return x % y;
    }
}

function equ(y) {
    return function(x) {
        return x === y;
    }
}



// step -1 with out point free
// but the first parametr fixed point 
var m2 =  mod(2);
var e2 = equ(1);

function isOdd(x) {
    return e2(m2(x));
}

isOdd(1);


//// step - 2
// with point-free using compose
function compose(fn2,fn1) {
    return function composed(val) {
        return fn2(fn1(val))
    }
}


var isOdd1 = compose(equ(1), mod(2));

isOdd1(2);