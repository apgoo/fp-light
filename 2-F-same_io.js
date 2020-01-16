// pure function 
function getId(obj) {
//  every time returns a same output 
    return obj.id;
}

getId({
    get id() {
//      generate diff type of input
        return Math.round(Math.random() * 1);
    }
});


// pure function call is runs in isolation mode
// if every time give the same input it return same output it is called pure;