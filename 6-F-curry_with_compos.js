function trible(x, y) { return x * y };
function dvid(x) { return x / 2 };
function sum(x, y) { return x + y };


// manual curry
function curry(fn) {
    return function(v1) {
        return function(v2) {
            return fn(v1,v2)
        }
    }
}

// manual compose with curry
function composeTwo(fn3,fn2, fn1) {
    return function compose(args) {
        return fn3(fn2(fn1(args)));
    }
}

var m = curry(trible);
var s = curry(sum);

// compose the binary function into unary with point free way
var c = composeTwo(
    dvid,
    s(2),
    m(2)
);

c(5) // 6

