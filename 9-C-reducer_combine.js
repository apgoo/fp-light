


// combiner function
// the shape is binary
// tuple array for key, value destructer
function addToRecord(acc, [key, value]) {
    return { ...acc,  [key]: value}
}


function reduce(redudcer, initVal, arr) {
    var ret = initVal;
    for(let ele of arr){
       ret =  redudcer(ret, ele);
    }
    return ret;
}


var arry = [
    ["name", "ap"],
    ["age", "20"],
    ["isMarrid", false]
]; 

// # init value is set to be empty
// # init value not setting reducer automatically set first value as accu
reduce(addToRecord, {}, arry);


// build in reducer
arry.reduce(addToRecord);

/*
    @ reduce works multible value 
    @ map & filter take single value paralizing the work, one value at a time  
    @ list of values into single  discret value
    @ combining the value like 3 + 5 or if only selects even

    @ reduce is like a swiss army nife we use map or filter to this reducer
    @ compoes mutlible function
*/



var nums = [1,2,3,4,5].reduce(function (acc, curr) {
//     acc = acc+curr;
    console.log(acc, curr);
    return curr;
})

