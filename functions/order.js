var JSPath = require('jspath');
var Model = require('../model/models.js');
var orders_data = require('../dummy-data/orders.js').orders;

// return order with given id
exports.get = function(request, reply){
    var order = JSPath.apply('.{.ID == $order_id}[0]', orders_data, {order_id: request.params.id});
    reply(new Model.Result(true, order));
};

// returns all the orders
exports.getAll = function(request, reply){
    reply(new Model.Result(true, orders_data));
};

// update order
exports.update = function(request, reply){
    reply();
};

// create an order
exports.create = function(request, reply){
    reply();
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