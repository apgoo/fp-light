function isVowel(word) {
    return ["a","e","i","o","u"].includes(word);
}

// RECURSIVE approch
function countVoweRecur(str,cont = v => v) {
    var first = isVowel(str[0]) ? 1 : 0;
    if(str.length <= 1) return cont(first);
    return countVoweRecur(str.slice(1), function fn(v) {
        return cont(first + v)
    });
}


var str = "the quick brown fox jums over the lazy dog";

//var str = "";

// we solving the sub proplem
countVoweRecur(str);