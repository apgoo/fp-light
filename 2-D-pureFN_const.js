
// const is not any net benifit
//  const z = 1;

// var has also provide some asure on this five lines of code
var z = 1;

function addTwo(x,y) {
    return x + y;
}

function addAnother(x,y) {
//  z variabel access outside of the function
//  this particulr code z did not change when use a CONST keyword
// if we have a more line of code, Z is not a good when use VAR keyword
// reader of the code every time metaly excute the code if use the var key word
// addTwo is the behave as const so it is obiouely no side effect it is pure fun call  
    return addTwo(x,y) + z;
}


// addAnother is pure function call 
// even if we run wherever the function 
// it will not side case anthing 
// pure function run's in isolatuion mode
addAnother(20,21);



///////////////////////////////
// emphosys it the author of the code making as obioues as possible
// to something is constent or that's gonna behave as a constent