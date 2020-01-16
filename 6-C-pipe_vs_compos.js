function minus2(x) { return x - 2 };
function trible(x) { return x * 3 };
function increment(x) { return x + 1 };


///////////////////////////////////////////////////////////////////
// compose utility(manual compos)

// compose the function order is right to left
function composeThree(fn3,fn2, fn1) {
    return function compose(args) {
        return fn3(fn2(fn1(args)));
    }
}

// function argumet order is matter
// compose => LEFT - TO - RIGHT
var shippingRate = composeThree(minus2, trible, increment); // 4 -> 13

// if change the order calcu should diffrent in compose
var shippingRate1 = composeThree(increment, trible, minus2); // 4 -> 7



/////////////////////////////////////////////////////////////////////////
// pipe utility

// manual pipe
// compose => LEFT - TO - RIGHT
function pipeThree(fn3,fn2, fn1) {
    return function compose(args) {
        return fn1(fn2(fn3(args)));
    }
}

// left-to-right order
var shippingRatePi = pipeThree(minus2, trible, increment); // 4 -> 7


/*

  COMPOSE -- > RIGHT - TO  - LEFT  
  PIPE -- >   LEFT - TO - RIGHT 

 why the pipe and compose this kind of order?
  function call is made when args givn the function is excute first order

  ## fn Programmer mostly used pipe cuz it's easy to use in order perspective
  ## dev strat with compose and shipping to use a pipe
  ## both uses in different casuse  

  
*/