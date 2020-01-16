'use strict';

// standart function call
function decrement(x) {
//  # this has return key word
//  # this don't express after or before calculation
//  # this also end of the code at tail position 
//  # this has only single function call
    return sub(x, 1); // this line is proper tail postion
}

function sub(x,y) {
    return x - y;
}


// decrement(2);

/*
    @ proper tail only single function call,
    @@ requier a return keyword
    @@@ don't do anthing afterword the function returns the value
 
*/


///////////////////////////////////////////////////
// recursion with PTC
function isVowel(word) {
    return ["a","e","i","o","u"].includes(word);
}

// RECURSIVE approch
function countVoweRecur(str,acc = 0) {
    acc += isVowel(str[0]) ? 1 : 0;
    if(str.length <= 1) return acc;
    return countVoweRecur(str.slice(1),acc);
}


var str = "the quick brown fox jums over the lazy dog";

//var str = "";

// we solving the sub proplem
countVoweRecur(str);