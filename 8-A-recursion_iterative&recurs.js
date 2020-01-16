// @@ ITERATIVE approch

// return the true for vowel includes
function isVowel(word) {
    return ["a","e","i","o","u"].includes(word);
}


// ## iterative
// moving to the index position at each iteration
function countVowelIter(str) {
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(isVowel(str[i])) {
            count++
        }
    }
    return count;
}

var str = "the quick brown fox jums over the lazy dog";

// countVowelIter(str); // 11


//////////////////////////////////////////////////////////////////////

// RECURSIVE approch
function countVoweRecur(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + countVoweRecur(str.slice(1));
}


// we solving the sub proplem
countVoweRecur(str);

/// two way to solve the proplem in recursion
// #1 solving the sub proplem 
// #2 dividing the proplem in to two half and solve it(divding conqure)






////////////////////////////////////////////////////////////////////////////////

// example (normal function with using recrsoin method)


function fnRecr(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr1(str.slice(1));
}

function fnRecr1(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr2(str.slice(1));
}
function fnRecr2(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr3(str.slice(1));
}
function fnRecr3(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr4(str.slice(1));
}
function fnRecr4(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr5(str.slice(1));
}
function fnRecr5(str) {
    if(str.length === 0) return 0;
    var first = isVowel(str[0]) ? 1 : 0;
    return first + fnRecr6(str.slice(1));
}
function fnRecr6(str) {
    if(str.length === 0) return 0;
//     var first = isVowel(str[0]) ? 1 : 0;
//     return first + fnRecr1(str.slice(1));
}


// fnRecr(str.slice(0, 6));







// RECURSIVE approch with some alter way

function countVoweRecur2(str) {
    // this first gives 0 or 1
    var first = isVowel(str[0]) ? 1 : 0;
    // last character's value (0 / 1) should return no more extra fn call
    // pre calculate the value for last character
    if(str.length <= 1) return first;
    return first + countVoweRecur(str.slice(1));
}

countVoweRecur2(str);