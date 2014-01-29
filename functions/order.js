// Importing required libraries, models
var JSPath = require('jspath');
var Model = require('../model/models.js');
var orders_data = require('../dummy-data/orders.js').orders;

// GET /orders/{id}
// Returns order with given id
exports.get = function(request, reply){

    // Find the order in the orders array
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // Response:
    reply(new Model.Result(true, order));

};

// GET /orders/{id}/products
// Returns the products of the order with given id
exports.getProducts = function(request, reply){

    // Find the order in the orders array
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // Return its products:
    reply(new Model.Result(true, order.products));

};

// GET /orders
// Returns all the orders
exports.getAll = function(request, reply){

    // Return orders array
    reply(new Model.Result(true, orders_data));

};

// POST /orders/{id}
// Update the order
exports.update = function(request, reply){

    // Find the order in the orders array
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // TODO
    // Parsing request.payload might be required, skipping that for now

    // IF contact details are attached to the request body, update accordingly
    if(request.payload.contact){
        order.recipientName = request.payload.contact.recipientName || order.recipientName;
        order.streetAddress = request.payload.contact.streetAddress || order.streetAddress;
        order.city = request.payload.contact.city || order.city;
        order.State = request.payload.contact.State || order.State;
        order.zipCode = request.payload.contact.zipCode || order.zipCode;
        order.phoneNumber = request.payload.contact.phoneNumber || order.phoneNumber;
    }

    order.products = request.payload.products || order.products;
    order.productQuantity = request.payload.productQuantity || order.productQuantity;

    // Operation successful:
    reply(new Model.Result(true, {}));

};

// PUT /orders
// Create a new order
exports.create = function(request, reply){

    // TODO
    // Find an ID for the new object by checking last created object's id

    // IF request body doesn't have these fields
    // THEN return an error, otherwise create the object
    if(request.payload.contact && request.payload.products && request.payload.productQuantity){

        // TODO
        // Parsing request.payload might be required, skipping that for now

        // Create order instance
        var newOrder = new Model.Order([
                request.payload.contact.recipientName, request.payload.contact.streetAddress, request.payload.contact.city,
                request.payload.contact.State, request.payload.contact.zipCode, request.payload.contact.phoneNumber,
                request.payload.products, request.payload.productQuantity
        ]);

        // Push it into the orders array
        orders_data.push(newOrder);

        // Operation successful
        reply(new Model.Result(true, {}));
    }

    else
        reply(new Model.Result(false, {}, "Missing required data to create an order."));

};

// DELETE /orders/{id}
// Delete the existing order
exports.delete = function(request, reply){

    // Find order with given id in the orders_data array
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // Find the index of the order
    var index = orders_data.indexOf(order);

    // THEN remove it from the array
    if (index > -1) {
        orders_data.splice(index, 1);
    }

    // Operation successful
    reply(new Model.Result(true, {}));

};