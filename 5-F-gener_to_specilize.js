function ajax(url, data, cb) {
    // .. some code
}
// general function call;
ajax(CUSTOMER_API,{id: 42}, renderCustomer);


function getCustomer(data, cb) {
    return ajax(CUSTOMER_API, data, cb);
}
// sematic relation of the name and the operation to get customer
getCustomer({id: 42}, renderCustomer);

function getCurrentCustomer(cb) {
// we did not use ajax(); cuz it not sematic relation    
//  ajax(CUSTOMER_API,{id: 42}, renderCustomer);
//  this getCustomer() is specification for getCurrentCustomer()
    return getCustomer({id: 42}, renderCustomer);
}

// even more descriptor then  direct getCustomer() call; 
getCurrentCustomer(renderCustomer);



/// the parameter order is matter

/*
function parameter
 general -> specific
when call the anary function order is matter
    most specalization is on the right
    more genral is on the left
*/ 

/*
ramda library map utility 
 R.map(callback, [2,1,39]);
 this utility get callback function is left and array of data (most specific) is on right
*/
