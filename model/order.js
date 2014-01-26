/* ORDER CLASS  */

//============================================================
// Constructor - MUST BE AT TOP OF FILE
// Overloading params: (contact, products, productQuantity)
//------------------------------------------------------------
var Order = function _ORDER(){

    this.contact = {
        recipientName: '',
        streetAddress: '',
        city: '',
        State: '',
        zipCode: '',
        phoneNumber: ''
    };

    this.products = [];

    this.productQuantity = [];

    // IF THERE IS ANY GIVEN ARGUMENTS (WHILE CREATING THE INSTANCE)
    // first optional argument - contact details
    if (arguments[0]){
        this.contact = arguments[0];

        // second optional argument - products array
        if (arguments[1]){
            this.products = arguments[1];

            // third optional argument - product quantities
            if (arguments[2]){
                this.productQuantity = arguments[2];
            }
        }
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
// var o1 = new NS.Order();
// var o2 = new NS.Order(contact, products, quantities);

module.exports.Order = Order;
