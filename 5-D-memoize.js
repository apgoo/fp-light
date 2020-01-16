///////////////////////////////////////////////////

// without memoize but it uses memoize kind technic
function repeater(count) {
/*  
  ##  str is clouser
  ##  we mutate this str closer when a() get called
  ##  str store the value "A"
  ##  this is kind of lazy way
  ##  some imparitive
*/    
    var str;
    return function allTheAs(v) {
        if(str === undefined) {
            // mutate the outer variable 
            // this is not pure
            str = "".padStart(count,v);
        }
        return str
    }
};


var a = repeater(8);

// 1 st call A did maked and cached the result
// this call is not abiousely pure
a("A");

// 2nd call previous result will return not excute agin 
a("A");



/////////////////////////////////////////////////////////
//   with third party memoize utility

function repeaterMez(count) {
    return memoize(function(v) {
        return "".padStart(count, v);
    })
};


var b = repeaterMez(9);
b("B");


// memoize is a third party utility 
// if we might use memoize to all functions is make huge memorie so it will not optimize
// if giving differnt input it will aslso take lot of memorie space
// useage pattern of memoize to deside function realy want memoize or not
