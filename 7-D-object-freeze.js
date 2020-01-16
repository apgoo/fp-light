/// object.freeze is not cover the nested object propertys

{
    const orderDetail = {
        orderId : 42,
        total : (basePrice + shipping)
    };

    if(orderItem.length > 0) {
        orderDetail.item = orderItem;
    };

// we tell reader of the code it's only read only 
// this gonna create some bugs cuz freeze not allow to change the orederdetails
// atleast tell to the reader this code did change    
    processOrder(Object.freeze(orderDetail));

}