
// recursive method by function
function isPalindrome(words) {
    if(words.length <= 1) return true;
    var first = words[0];
    var last = words[words.length - 1];
    if(first === last) {
        return isPalindrome(words.substring(1, words.length - 1));
    }
    return false;
}


console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
