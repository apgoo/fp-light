// procedure code
// dose not have any return value
// return undefined output
// 
function addNumber(x = 0, y = 0, z = 0, w = 0) {
    var total = x + y + z + w;
//  only log the value not return value    
    console.log(total);
    // this function reurtrn undefined
}

// addExtraNum is also precedure cuz it call other proceduer
function addExtraNum(x = 2, ...rest) {
    // this call getting the undefined value
    return addNumber(x,40, ...rest);
}

addExtraNum(); // reutrn value undefined


addExtraNum(3,8,11); // retrun value undefined


/////////////////////////////////////////////

// functional 

function tuple(x,y) {
    // return arr of value
    return [x+1, y-1];
}


//de structure array into induvitual value;
// direct input and direct output
// get arr of value, we destructure it
var [a,b] = tuple(9, 10);
a;
b;

