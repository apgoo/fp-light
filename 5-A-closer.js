// clouser some examble 

// impure fn clouser
function increament() {
//  we can modify it cuz var are not referance type it is by value type  
// count is clouser, every time we modify it
    var counter = 0;
    return function () {
        return ++counter;
    }
}


var c = increament();

c(); // 1
c(); // 2
c(); // 3



// @@ clouser is not nessaserly pure, it is functionaly  pure
// @@ clouser can use functional purity




// pure fn with clouser
function unary(fn) {
    return function one(args) {
        return fn(...args);
    }
}  

// @ this unary' s  fn still in memory even the excution will complete it is called clouser


//// test 
function test(fn) {
    fn()
    return function(args) {
        fn();
        return args;
    }
}

function foo() {
    console.log("hello");
}

var cal = test(foo);
cal("world");