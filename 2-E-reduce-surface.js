// pure function
function addAnthor(z) {
    return function addTwo(x,y) {
        return x + y + z;
    }
}

// Z is a variable not outside the scope it's parameter
// Z is only passibel to change in line 2 to  2 1/2 only 
// this reduces the outer scope z is not getting reassginge
// when call the fist set of (2) it clouse the z value
// (5,7) second call is acces the z parameter and return value
// this funciton is pure 


addAnthor(2)(5,7);