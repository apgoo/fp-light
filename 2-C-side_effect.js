// it is not a function 
// event thought it has sematic relationship
// the input and output indirect
// name sematic is not only make pure function
// side effect: indirect input and indirect output
 
// shippingRate is sematic relation 
function shippingRate() {
//  rete variable global scope it makes side effect
//  each of the veriable accessed indirectly (outside);
    rate = ((size + 1) * weight) + speed;
}

// indirect input
var rate,
size = 12,
weight = 4,
speed = 5;

// fucntion call is also matter 
// this call not an any direct input and direct output
shippingRate();
// rate;


// # access the variable outside the function is a side effect


//////////////////////////////////////////////////////////
//                 avoide side effect 

// function defenition is not side effect
// all variavbles are direct input and the function return value
function shippingRate1(size, weight, speed) {
    return ((size + 1) * weight) + speed;  
}


// function call is deside the function is side effect or not
// function defenition not only matter function call is also have not side effect
// call the function with direct input, use the parameter for function defenition for the value directly  
shippingRate1(12,4,5);




////////////////////////////////////////////////////////////
// side effect things

// lot of other way do make a side effect
// dom, console, timestamp , random generator, data base store, network call
// CPU heat, CPU time delay

// computer cpu make heate it also caseus side effect bcuz cpu heat take some time delay
// to excute the function



// no such a thing "no side effect"
// avoide where it posible  or make the obiuse

