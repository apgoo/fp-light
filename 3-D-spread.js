
function adding(w,x,y,z) {
    return w+x+y+z
}


// spread adapter function
// this time adding() is heigher order fn
function spread(fn) {
//      recive arr of parameter   
    return function spreading(args) {
//      passing indivtual argument using spread operator
        return fn(...args);
    }
}




var d = spread(adding);
d([1,2,3,4]);