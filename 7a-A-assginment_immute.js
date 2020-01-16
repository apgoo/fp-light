////////////////////////////////////////

// variable assignmnet
var x = 4;
x++; // re-assign #allowed


/////////////////////////////////////////
// const placeHolde assign
const z = 8;
z++; // not allowe to reassign

////////////////////////////////////////

// const and usage

// this code data structure 
{
    
// const is not adding any extra benifit here
// one thing - const tells don't change value in feature to reader
// second - const itself tell us (author) you won't re-assign it 
// this 6 lines of code const did not gives any feature 
    const y = 5;
    var x = 6; 
    var w = foo(x,y);
    bar(x,y,w);
    w = [x+2,y*3, w+2];
    bam(y);

}



 