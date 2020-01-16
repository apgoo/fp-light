"use strict";

function id(x) {
    return x; // (A)
}
function f(a) {
    let b = a + 1;
    return id(b); // (B)
}
console.log(f(2)); // (C)


////////////////////////////////////////////////////////////////////////

function isVowel(word) {
    return ["a","e","i","o","u"].includes(word);
}

// RECURSIVE approch
function countVoweRecur(acc,str) {
    var first = isVowel(str[0]) ? 1 : 0;
    acc = acc+ first;
    if(str.length <= 1) return acc;
    
    // #1this function call is end of the function logic, in a tail position
    // current stack frame is no need any more
    // #2why we don't through the current stack frame or reusing the current stack frame for next function call 

//  return first + countVoweRecur(str.slice(1));
    return countVoweRecur(acc, str.slice(1));
}


var str = "the quick brown fox jums over the lazy dog";

//var str = "";

// we solving the sub proplem
countVoweRecur(0,str);