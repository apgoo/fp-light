/////////////////////////////////////////////////////////
// 
function trampoline(fn) {
    return function trampolined(...args) {
        var result = fn(...args);
        while(typeof result === "function") {
            result = result()
        }
        return result;
    }
}


///////////////////////////////////////////////////
// recursion with PTC
function isVowel(word) {
    return ["a","e","i","o","u"].includes(word);
}


function countVoweRecur(str,acc = 0) {
    acc += isVowel(str[0]) ? 1 : 0;
    if(str.length <= 1) return acc;
    return function() {
        return countVoweRecur(str.slice(1),acc);        
    }
    
}


// var str = "the quick brown fox jums over the lazy dog";
var str = "t";


trampoline(countVoweRecur)(str);