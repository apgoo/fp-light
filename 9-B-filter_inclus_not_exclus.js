

/// this is a pridicate function 
function isLoggedIn(user) {
    return user.session != null;
};

// filter the list of value inclusonary
function filterIn(prdicateFn, arr) {
    var newList= [];
    for(var ele of arr) {
        if(prdicateFn(ele)) {
            newList = [...newList, ele];
        }
    }
    return newList;
}


var users = [
    {userId: 456, session: "6fjsor3oimcvp"},
    {userId: 538},
    {userId: 935, session: "9skopwllxcxol"}
];

filterIn(isLoggedIn, users);




/*
    # filter is not an exclusionary it is actually inclusonary operation
    # it filter the value if prdicate function return false
    # if prdicate will return true filter return the value as a list
     

     # when we gointo market ther apple and oranges in one basket
     we need only apple no an orange so we wanna filter in apple
     or filter out the orange

     # prdicate return true will inclusion defanion for filter the values 

     # filter make a list for filter some values based upon the prdicate function
     return true will makes list 
     
     # filter does not modify the value it returns  value based on condition
*/