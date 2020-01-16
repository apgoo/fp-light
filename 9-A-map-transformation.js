// map transforming the value one to another

// obiusly pure function
function makeRecord(name) {
    return { id: Math.round(Math.random() * 400), name };
}


//  
function maps(mapper, arr) {
    var newList = [];
    for(var ele of arr) {
        newList.push(mapper(ele));
    }
    return newList;
}
maps(makeRecord, ["google", "facebook"]);




["twitter", "yahoo"].map(makeRecord);



"apple".toUpperCase();

"apple".concat(" Inc");

// functor has two importend things 1: identifier, 2: compose
/*
    # .map did not mutate the list of values instaed it givers a newely create exact type 
      of modified list vales
    # map is functor
    # map the list into another is called morphisum
    # morph the arr of value into string
    # arr of value to one value is not possible
    # to understand functor to use cotagoriy theory => it has two require identity, composing  
    # value could change one to another, map it does it
*/       