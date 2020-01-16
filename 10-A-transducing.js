
function add1(v) {
    return v+1;
}

function isOdd(v) {
    return v % 2 === 0;
}

function sum(totla,val) {
    return totla + val;
}

var list = [1,3,4,6,9,12,13,16,21];

///////////////////////////////////////////////////////////
//               fusion
list
.map(add1)     // new arry generate
.filter(isOdd) // new filtered valu generate
.reduce(sum);  // reduce val 52



/////////////////////////////////////////////////////////
//      Manualy put together

list.reduce(function(total,val) {
//  this type of code is more imparitive     
    val = add1(val);
    if(isOdd(val)) {
        total = sum(total,val);
    }
    return total;
}, 0)




/////////////////////////////////////////////////////////
//     TRANSDUCING

/* step-1
// add reducer together in a function
// each time it returns a list 
function mapWithReducer(arr, mapperFn) {
//  mutating the array value 
    return arr.reduce(function (list, v) {
        list = [...list, add1(v)];
        return list;
    }, [])
}

function filterWithReducer(arr, prdicateFn) {
//  mutating the array value
    return arr.reduce(function(list, v) {
        if(prdicateFn(v)) {
            list = [...list, v];
        }
        return list;
    }, []) 
}

// 
list = mapWithReducer(list,add1);
list = filterWithReducer( list, isOdd);
list.reduce(sum);
*/


/*

/////////////////////////////////////////////////////////
/////////  deriving Transduction Extracting reduce

// saparate the reduce to this function step-2
function mapReducer(mapperFn) {
    // mapperFn is clouser hard coded
    return function reducer(list,v) {
        list = [...list, mapperFn(v)];
        return list;
    }
}
function filterReducer(predicateFn) {
    //                      [acc] cur   
    return function reducer(list, v) {
        if(predicateFn(v)) {
            list = [...list, v];
        }
        return list;
    }
}

// it makes look like a fusion
// we make it as composable returned function to each reducer
list
// we get a reducer funcion return back 
.reduce(mapReducer(add1), [])
.reduce(filterReducer(isOdd), [])
.reduce(sum);
*/

/////////////////////////////////////////////////////////
///////   Transduction combiner & carrying  step-3
function listCombiner(list,v) {
    list = [...list, v];
    return list;
}


function mapReducer(mapperFn) {
    return function currier(combinerFn) {
//      heigher order reducer
        return function reducerMap(list,v) {
            return combinerFn(list, mapperFn(v));
        }
    }
}
function filterReducer(predicateFn) {
    return function currier(combinerFn) {
//      heigher order reducer
        return function reducerFill(list,v) {
            if(predicateFn(v)) {
                return combinerFn(list, v);
            }
            return list;
        }
    }
}

/*
// parameterize the listCombiner and manual using curry
// higher order reducer fn return the reducer to the .reducer
// when here we using tight curry this will more specilize the mapReducer&filterReducer
// reducer waiting for combinerFn return value
list
.reduce(mapReducer(add1)(listCombiner), [])
.reduce(filterReducer(isOdd)(listCombiner), [])
.reduce(sum);
*/



/////////////////////////////////////////////////////////
///////   Transduction combiner & carrying  step-3

// manual composing
function compose(fn2,fn1) {
    return function composing(args) {
        return fn2(fn1(args));
    }
}


// filterReducer waiting for the sum of mapReducer value to pass to it self and predicate it true/false
// filterReducer returns reducerFill to mapReducer using compose utility
var transducer = compose(mapReducer(add1), filterReducer(isOdd));
/*
// #
list
.reduce(transducer(listCombiner), [])
.reduce(sum);
*/

// # listCombiner & sum are doing the same things so we remove the listCombiner
// we only need a combining value so directly pass the sum
// list
// .reduce(transducer(sum), 0); // 52

// transducer utility
function transduce(transducer, combiner, initValue, list) {
    return list.reduce(transducer(combiner), initValue);
}
 
transduce(transducer, sum, 0, list)

// 4 inputs 
// transduce is third party utilites
// transduce(transducer, sum,0, list);

/*

   # transducer is composing of reducers

   # map,filter and reduce are diffrent event thoung map and filter are diffrent shapes
   cuz map changeing the value that return value filter returns boolen value

   # if we have a three diffrent list opration like map,reduce and filter this 
   shapes are diffrent so we cannot use equational resaning

   # we might want to compose together to such thing we use Mehtod called TRANSDUCING

   # mapReducer, filterReducer are just a utilites pass mapper function to reducer it is mapReducer
   also filter do the same


*/