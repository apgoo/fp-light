function fn(x) {
    return function() {
        return x;
    };
}
function add(x,y) {
    return x + y;
}
function add2(f1,f2) {
    return add(f1(), f2());
}
function trampoline(fns) {
    return function tramp(args) {
        var result = fns(args);
        while(typeof result === "function") {
            result = result();
        }
        return result;
    }
}

////////////////////////////////////////////////////////////
//recursve with trampoline
function addn([f1,f2,...rest]) {
   if(rest.length === 0) return add2(f1,f2);
   return function() {
       return addn([ () => add2(f1,f2), ...rest]);
   }
}
var ad= trampoline(addn);


////////////////////////////////////////////////////////////
//              reducer methode
/*
// reducer
function addn(fns) {
    return fns.reduce(function (acc, cur) {
       return function fs() {
           return add2(acc, cur);
       }    
    })(); 
}
*/


////////////////////////////////////////////////////////////
//              iterative methode
/*
function addn(fns) {
    while(fns.length > 2) {
        let [fn1,fn2,...rest] = fns
        fns = [() => add2(fn1, fn2), ...rest];
    }
    return add2(fns[0], fns[1])
}
*/

var arr = [1,6,3,4,9,3,2,0,4,8,11,1,3,10,9,4,6];

ad(
    arr.reduce(function (newList, val) {
        if(!newList.includes(val)) {
            newList = [...newList, val];   
            return newList;
        }
        return newList;

    }, []).filter(function isOdd(list) {
        return list % 2 == 0;
    }).map(fn) 
)



// addn([fn(1), fn(2), fn(3), fn(4), fn(5)]);
/*
# Lists (And FP Review!)

This is an exercise to practice list operations (map/reduce/filter). We also revisit a variety of previous FP concepts (closure, recursion, etc).

## Instructions

1. Write two functions, each which return a fixed number (different from each other) when called.

2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.

3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.

4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.

5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (hint: reduce).

6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.

7. Filter your array to only have even numbers in it.

8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

## Bonus

Write tests for your functions.
*/