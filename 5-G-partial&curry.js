//////////////////////////////////////////////////////////////
// partial application
function ajax(url, data, cb) {
    // .. some code
};
// specialize the function (partial is ramda utility);

// first parameter was prespecified
var getCustomer = partial(ajax(CUSTEMER_API));

// specialized function passed into the nother partial call 
var getCurrentCustomer = partial(getCustomer({id: 42}));

getCurrentCustomer(renderCoustmer);




///////////////////////////////////////////////////////////////
// curring 
// curry comes from haskell
function ajax(url) {
    return function(data) {
        return function(cb) {
         // .. some code   
        }
    }
}

// normal curry function call (manual curry);
ajax(CUSTEMER_API)({id:42})(renderCoustmer);



////////////////////////////////////////////////////////////////////
// curry utility from ramda

// use the ramada curry
var ajax = curry(function (url,data,cb) {
    //....some code
})

var getCustomer = ajax(CUSTEMER_API);
var getCurrentCustomer = getCustomer({id:42});
getCustomer(renderCoustmer);



var ajaxCall = R.curry(3, function ajax(url, data, cb){
    // ...some code
});

// strickt curring
ajaxCall(CUSTEMER_API) ({id: 45}) (renderCoustmer);

// losse curring
ajaxCall(CUSTEMER_API, {id: 42})(renderCoustmer);




/*

    @@ both are the specialize the function
    @@ partial appliction presets some argument now and revice the rest at next call
    @@ curring is not presets any argument. it recives one argument at a time
*/    