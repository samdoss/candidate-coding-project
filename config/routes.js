var index = require('../functions/index.js');
var order = require('../functions/order.js');
var product = require('../functions/product.js');

// returns route definition array
module.exports.getRoutes =  function(){

    return [

        { method: 'GET', path: '/', config: { handler: index.check } },

        ///////////////////////////////////////////////////////////////////
        // PRODUCTS

        // get all products
        { method: 'GET',    path: '/products', config: { handler: product.getAll } },

        // get product with given id
        { method: 'GET',    path: '/products/{id}', config: { handler: product.get } },

        // create product
        { method: 'PUT',    path: '/products', config: { handler: product.create } },

        // update product
        { method: 'POST',   path: '/products/{id}', config: { handler: product.update } },

        // delete product
        { method: 'DELETE', path: '/products/{id}', config: { handler: product.delete } },


        ///////////////////////////////////////////////////////////////////
        // ORDERS

        // get all orders
        { method: 'GET',    path: '/orders', config: { handler: order.getAll } },

        // get order with given id
        { method: 'GET',    path: '/orders/{id}', config: { handler: order.get } },

        // get products of the order with given id
        { method: 'GET',    path: '/orders/{id}/products', config: { handler: order.getProducts } },

        // create order
        { method: 'PUT',    path: '/orders', config: { handler: order.create } },

        // update order
        { method: 'POST',   path: '/orders/{id}', config: { handler: order.update } },

        // delete order
        { method: 'DELETE', path: '/orders/{id}', config: { handler: order.delete } }

    ];
}