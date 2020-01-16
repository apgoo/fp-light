// normal list map call and indirect map method
function add1(x) { return x + 1 };
function mult2(x) { return x * 2 };
function div3(x) { return x / 3 };

var list = [2,5,8,11,14,17,20];

// this three function is same saphe so this can interchangable
// like point free way
// we make it referantial transparency 
// this all three map is called fusion 
list
.map( add1 )
.map( mult2 )
.map( div3 );

/*
    ## this three map methodes or each time create two intermediate arrays 
       cuz map gives new array 
    ## if we use map,reduce and filter in series of chani for 10 times 
       this will make 9 intermediate arrays. it cases more heap memory
    ## this intermediate not use full at all   
    
    ##  
*/

///////////////////////////////////////////////////////////////////////////
// map using compose to redce intermediate arrays

// auto pipe
function pipe(...fns) {
    return function piping(val) {
        for(let fn of fns) {
            val = fn(val);
        }
        return val;
    }
}

function compose(...fns) {
    return pipe(...fns.revers());
}

// this map call is reduce intermediate array createion
// every time we call the values are jumb in to each call  back function 
// this will prduce one single array
// compose this three is more declarative approce. 
list.map(
     compose(div3, mult2,add1)
);

/*
    ## if we use map. it takes call back if this callback is access outside the variable is impure
    even compose them together

    ## .map method in fP is not perfect even thoug map fn can't access outside the value like impure way
    ## built in .map is make some impure codes and indirect input to the function  like implicityly pass the 
    value
    # using .map is to the array we did not decompse back


    ## some third party library like RAMDA, LODASH has provides map function
    ## ramda's R.map(callBackFN, [array]);
    R.map is right to left associtivity 
*/