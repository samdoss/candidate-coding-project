/* ORDER CLASS  */

//============================================================
// Constructor - MUST BE AT TOP OF FILE
//------------------------------------------------------------
var Order = function _ORDER(){

    // IF THERE IS ANY GIVEN ARGUMENTS (WHILE CREATING THE INSTANCE)
    // first optional argument - contact details
    if (arguments[0] && arguments[0].length == 8){

        var params = arguments[0];
        this.contact = {};
        this.contact.recipientName = params[0];
        this.contact.streetAddress = params[1];
        this.contact.city = params[2];
        this.contact.State = params[3];
        this.contact.zipCode = params[4];
        this.contact.phoneNumber = params[5];
        this.products = params[6];
        this.productQuantity = params[6];

    }

    else {
        console.log('Please create an instance of Order with all required arguments.')
    }

}


//============================================================
// Member Functions & Variables
//------------------------------------------------------------
Order.prototype = {

    contact: null,
    products: null,
    productQuantity: null,

    getContact: function (){
        return this.contact;
    },
    getProducts: function (){
        return this.products;
    },
    getProductQuantity: function (){
        return this.productQuantity;
    }

}

//============================================================
// Example Usages
//------------------------------------------------------------
// var o2 = new Order('Christ Health Center', '5720 1st Avenue South', 'Birmingham', AL', '35212', '(205) 380-9455', [1], [3]]);

module.exports.Order = Order;
