///////////////////////////////////////////////////////////////////
/*
    ## read only data structutre:
 data structutre that never need to be mutated        

*/


function processOrder(order) {
    // we copy the data structutre copy;
    var { processOrde } = order;
    if(!("status") in order) {
    // mutate the copy of order;
        processOrde.status = "completed";
    }
//  send some where elese
    saveTodataBase(processOrde);
}




/*

    # first - when make function passign the data to the data structutre
       we could asbsultly make the code read only it's freezed 
    ## two - when we make function that can get the data from the data structutre 
       we assume don't mutate the data instead copy of it 

*/ 