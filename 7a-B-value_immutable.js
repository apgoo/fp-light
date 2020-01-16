// Object.freeze is value immutable method

// this code tell the reader, array did not change it valu did not change
// obejct.freeze only works parent array not nested array
// if we use nested array we shold sure to apply obejct.freeze 

var z = Object.freeze([3,6,4,[1,2,8]]);

z[1] = 9; // not change occur
z[3][2] = 10; // value changed in nested array 


////////////////////////////////////////////////
// IMMUTABEL JS

// if we want really  immutable values
// use immutable.js library


// assign array of values using Imm.js
var state = Immutable.List.of(1,3,5);

// add a another value to those state array
var newState = state.set(42,"meaning of life");

// the diffrent is #newState is not clone the original #state arry
// instead we can create new object in optimize way
// we use this kind of arry explicitly tells the reader like we did on (var #newState)
console.log(state === newState); // false

console.log(state.get(2)); //  [5]

console.log(newState.get(2)); // [5]

console.log(state.get(42)); // undefined

console.log(newState.get(42)); // "meaning of life"



////////////////////////////////////////////////////////////////////
// take some mind thing to others value

// use a others code value we should assume don't mutate just make copy and do the things
function doubleTheImmutable(value) {
    var newArry = [];
    for(var i= 0; i< value.length; i++) {
        newArry[i] = value[i];
    }
    return newArry;
}

// getting from somwhere elese from the code
var arr = [3,6,2,9];


// make sure to copy of the original array
var arr2 = doubleTheImmutable(arr);


arr;  // original array
arr2; // new immutable array







/*

    ## when use immutable.js is some heard
    ## we use object.freeze when light works

    ## assignment immutable is not big deal 
    ## we should only thing value immutable

*/