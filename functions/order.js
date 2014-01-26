var JSPath = require('jspath');
var Model = require('../model/models.js');
var orders_data = require('../dummy-data/orders.js').orders;

// returns order with given id
exports.get = function(request, reply){
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});
    reply(new Model.Result(true, order));
};

// returns product id array of the order with given id
exports.getProducts = function(request, reply){
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});
    reply(new Model.Result(true, order.products));
};

// returns all the orders
exports.getAll = function(request, reply){
    reply(new Model.Result(true, orders_data));
};

// update order
exports.update = function(request, reply){

    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // TODO
    // parsing request.payload might be required, skipping that for now

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
    reply(new Model.Result(true, {}));
};

// create an order
exports.create = function(request, reply){

    // TODO
    // find an ID for the new object by checking last created object's id

    // if request doesn't have these fields
    // then return an error, otherwise create the object
    if(request.payload.contact && request.payload.products && request.payload.productQuantity){

        // TODO
        // parsing request.payload might be required, skipping that for now

        // create order object
        var newOrder = new Model.Order([
                request.payload.contact.recipientName, request.payload.contact.streetAddress, request.payload.contact.city,
                request.payload.contact.State, request.payload.contact.zipCode, request.payload.contact.phoneNumber,
                request.payload.products, request.payload.productQuantity
        ]);

        // push it into orders array
        orders_data.push(newOrder);

        // successful
        reply(new Model.Result(true, {}));
    }

    else
        reply(new Model.Result(false, {}, "Missing required data to create an order."));
};

// delete existing order
exports.delete = function(request, reply){

    // find order with given id in orders_data
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});

    // find the index of the order
    var index = orders_data.indexOf(order);

    // then remove it from the array
    if (index > -1) {
        orders_data.splice(index, 1);
    }

    // response
    reply(new Model.Result(true, {}));
};