// Importing required libraries, models
var JSPath = require('jspath');
var Model = require('../model/models.js');
var products_data = require('../dummy-data/products.js').products;

// GET /products/{id}
// Returns product with given id
exports.get = function(request, reply){

    // Find the order in the orders array
    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});

    // Return the product
    reply(new Model.Result(true, product));

};

// GET /products
// Returns all the products
exports.getAll = function(request, reply){

    // Return products array
    reply(new Model.Result(true, products_data));

};


// POST /products/{id}
// Update the product
exports.update = function(request, reply){

    // Find the product in the products array
    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});

    // TODO
    // Parsing request.payload might be required, skipping that for now

    // IF contact details are attached to the request body, update accordingly
    product.name = request.payload.name || product.name;
    product.description = request.payload.description || product.description;
    product.width = request.payload.width || product.width;
    product.length = request.payload.length || product.length;
    product.height = request.payload.height || product.height;
    product.weight = request.payload.weight || product.weight;
    product.value = request.payload.value || product.value;

    // Operation successful:
    reply(new Model.Result(true, {}));

};

// PUT /products
// Create a new product
exports.create = function(request, reply){

    // TODO
    // Find an ID for the new object by checking last created object's id

    // TODO
    // Parsing request.payload might be required, skipping that for now

    // Create product instance
    var newProduct = new Model.Product([
        request.payload.name, request.payload.description, request.payload.width,
        request.payload.length, request.payload.height, request.payload.weight,
        request.payload.value
    ]);

    // Push it into the products array
    products_data.push(newProduct);

    // Operation successful
    reply(new Model.Result(true, {}));
};


// DELETE /products/{id}
// Delete the existing product
exports.delete = function(request, reply){

    // Find order with given id in the orders_data array
    var product = JSPath.apply('.{.ID == $product_id}[0]', products_data, {product_id: request.params.id});

    // Find the index of the order
    var index = products_data.indexOf(product);

    // THEN remove it from the array
    if (index > -1) {
        products_data.splice(index, 1);
    }

    // Operation successful
    reply(new Model.Result(true, {}));
};