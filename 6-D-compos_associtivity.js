/// math assocativity
1+2+3; // 6
3+2+1; // 6
// both of this two maths are exact same output even change the assocativity


function minus2(x) { return x - 2 };
function trible(x) { return x * 3 };
function increment(x) { return x + 1 };

function composeTwo(fn2, fn1) {
    return function compose(...args) {
        return fn2(fn1(...args));
    }
}

// change the order with right-to-left
var g = composeTwo(
        composeTwo(minus2, trible),
        increment
)

var h = composeTwo(
        minus2,
        composeTwo(trible, increment)
)



g(4); // 13
h(4); // 13
