"use strict";

var output = console.log.bind(console);
var printIf = when(output);
var isLongEnough = not(isShortEnough);


// negate function
function not(fn) {
    return function(args) {
        return !fn(args)
    }
}

function when(out) {
    return function(predicate) {
        return function(msg) {
            if(predicate(msg)) {
               return out(msg);
            }
        }
    }
}


function isShortEnough(str) {
	return str.length <= 5;
}


var msg1 = "Hello";
var msg2 = msg1 + " World";





printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World