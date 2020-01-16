function add1(x) {
    return x + 1;
}
function multi2(x) {
    return x * 2;
}
function divid3(x) {
    return x / 3
}



// @@ compose is composes the function right to leftt
function composeTwo(fn2,fn1) {
    return function composed(args) {
        return fn2(fn1(args));
    }
}

// @@ pipe is composes the function left to righ
function pipeTwo(fn2,fn1) {
    return function composed(args) {
        return fn1(fn2(args));
    }
}


// ##  reducer goes to left to right  
// var red = [divid3,multi2,add1].reduce(composeTwo);
// red(8);


// ##  reducer goes to  right to left (div -> mult -> right)
// var red1 = [add1,multi2,divid3].reduceRight(composeTwo);
// red1(8);


// ##  reducer goes to left to right 
var pip = [add1,multi2,divid3].reduce(pipeTwo);
pip(8);

// ##  reducer goes to left to right (div -> mult -> right)
var pip1 = [divid3,multi2,add1].reduceRight(pipeTwo);
pip1(8);



/////////////////////////////////////////////////////////

function composeRight(...fns) {
    return function composed(val) {
        return fns.reduceRight(function (v, fn) {
            return fn(v);
        }, val)
    }
}



// like pipe
function composeLeft(...fns) {
    return function composed(val) {
        return fns.reduce(function (v, fn) {
            return fn(v);
        }, val)
    }
}


var comRight = composeRight(divid3, multi2, add1);
comRight(8)

var comLeft = composeLeft(add1,multi2,divid3);
comLeft(8)