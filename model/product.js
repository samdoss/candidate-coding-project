/* PRODUCT CLASS  */

//============================================================
// Constructor - MUST BE AT TOP OF FILE
//------------------------------------------------------------
var Product = function _PRODUCT(){

    // IF THERE IS ANY GIVEN ARGUMENTS (WHILE CREATING THE INSTANCE)
    // first optional argument - contact details
    if (arguments[0] && arguments[0].length == 7){

        var params = arguments[0];

        this.name = params[0];
        this.description = params[1];
        this.width = params[2];
        this.length = params[3];
        this.height = params[4];
        this.weight = params[5];
        this.value = params[6];

    }

    else {
        console.log('Please create an instance of Product with arguments.')
    }

}


//============================================================
// Member Functions & Variables
//------------------------------------------------------------
Product.prototype = {

    name: null,
    description: null,
    width: null,
    length: null,
    height: null,
    weight: null,
    value: null,

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

var o2 = new Product();
console.log(o2);
module.exports.Product = Product;
