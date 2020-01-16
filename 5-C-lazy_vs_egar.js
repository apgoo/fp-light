/////////////////////////////////////////////////////
// @@ LAZY call

// count is a clouser
// BENIFIT : 90% of time we did not call a().only 10% of time a() gets called
// DRAWBACK: call  a() over and over again the whole process repeated
// we defer the work allTheAs() fun. it gets called when we want it is LAZY 
// this type can if we have some condition base nested function into function main thing is get call  
function repeaterLazy(count) {
    return function allTheAs(str) {
        return "".padStart(count, str)
    }
}

var a = repeaterLazy(10);

console.log(a("A")); // AAAAAAAAAA

// every time made a call the whole process is running
console.log(a("A")); // AAAAAAAAAA


/////////////////////////////////////////////////////////
// @@ EGAR call

// this time clouser is [opStr]
// BENIFIT : process make only one time in egar way
// DRAWBACK: if we never get call the b() (return function allTheBs). the whole thing not usefull
// we defer the work allTheAs() fun. it gets called when we want it is LAZY 
function repeaterEgar(count,str) {
    // egar setup
    var opStr = "".padStart(count, str);
    return function allTheBs() {
        // call b() get runturn the clouser value opStr 
        return opStr;
    }
}

var b = repeaterEgar(10, "B");

console.log(b());

// every single time call we did make new process
console.log(b());
