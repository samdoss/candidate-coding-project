/* PRODUCT CLASS  */

//============================================================
// Constructor - MUST BE AT TOP OF FILE
//------------------------------------------------------------
var Product = function _PRODUCT(){

    // IF THERE IS ANY GIVEN ARGUMENTS (WHILE CREATING THE INSTANCE)
    // first optional argument - contact details
    if (arguments[0] && arguments[0].length == 7){

        var params = arguments[0];

        this.name = params[0] || '';
        this.description = params[1] || '';
        this.width = params[2] || 0;
        this.length = params[3] || 0;
        this.height = params[4] || 0;
        this.weight = params[5] || 0;
        this.value = params[6] || 0;

    }

    else {
        console.log('Please create an instance of Product with all required arguments.')
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
// var o1 = new Product(['KARLSTAD', 'Loveseat and chaise lounge, Grann dark brown', 40, 30, 20, 20, 179]);

module.exports.Product = Product;
