var JSPath = require('jspath');
var Model = require('../model/models.js');
var products_data = require('../dummy-data/products.js').products;

// returns product with given id
exports.get = function(request, reply){
    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});
    reply(new Model.Result(true, product));
};

// returns all the products
exports.getAll = function(request, reply){
    reply(new Model.Result(true, products_data));
};

// update product
exports.update = function(request, reply){

    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});

    // TODO
    // parsing request.payload might be required, skipping that for now

    product.name = request.payload.name || product.name;
    product.description = request.payload.description || product.description;
    product.width = request.payload.width || product.width;
    product.length = request.payload.length || product.length;
    product.height = request.payload.height || product.height;
    product.weight = request.payload.weight || product.weight;
    product.value = request.payload.value || product.value;

    reply(new Model.Result(true, {}));
};

// create an order
exports.create = function(request, reply){

    // TODO
    // find an ID for the new object by checking last created object's id

    // TODO
    // parsing request.payload might be required, skipping that for now

    // create product instance
    var newProduct = new Model.Product([
        request.payload.name, request.payload.description, request.payload.width,
        request.payload.length, request.payload.height, request.payload.weight,
        request.payload.value
    ]);

    // push it into products array
    products_data.push(newProduct);

    // successful
    reply(new Model.Result(true, {}));
};

// delete existing order
exports.delete = function(request, reply){

    // find order with given id in orders_data
    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});

    // find the index of the order
    var index = products_data.indexOf(product);

    // then remove it from the array
    if (index > -1) {
        products_data.splice(index, 1);
    }

    // response
    reply(new Model.Result(true, {}));
};