{

    const orderDetail = {
        orderId : 42,
        total : (basePrice + shipping)
    };

    if(orderItem.length > 0) {
        orderDetail.item = orderItem;
    };
    processOrder(orderDetail);


}
/*
 99 % of mutabiliy can occur by value immutabity

 // look at those code orderDetail obj can mutate every time but we don't know whta processOrder is doing 

 // so we prdict the mutabiliy and product them from bugs 
  
 // value immutabity happen everywhere cuz it pass evey where in the code 
*/  
