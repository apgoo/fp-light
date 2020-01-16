// pure function better defnition
// takes input return output not enough,
// relation b/w in&out
// direct in & out
// even direct input not matter, indirect input no problem when it act as constent
// better is sameinput to the function call rertun same output is pure still it's complete
// even forther we move other technic

// ## referncial tranparancy
// ## every time function gets call the called function retrun value is replaced with as a value
// ## referncial tranparancy: function call can replaceed with its return value, without affect 
// ## rest ofthe code
function repeater(count) {
    return memoize(function allTheAs() {
        return "".padStart(count, "A");
    })
};


var a = repeater(10);

function refTr() {
//     a() replaced with return value with out affect rest of the code
    if(a() === "string") {
        return "it is referancial tranparancy";
    }
}


/*
function repeater(count) {
    return memoize(function allTheAs(v) {
        return "".padStart(count, v);
    })
};

var a = repeater(10);
a("A");
*/