var index = require('../functions/index.js');
var order = require('../functions/order.js');
var product = require('../functions/product.js');

// Returns array - contains Hapi route definition objects
module.exports.getRoutes =  function(){

    return [

        { method: 'GET', path: '/', config: { handler: index.check } },

        ///////////////////////////////////////////////////////////////////
        // PRODUCTS

        // Get all the products
        { method: 'GET',    path: '/products', config: { handler: product.getAll } },

        // Get the product with given id
        { method: 'GET',    path: '/products/{id}', config: { handler: product.get } },

        // Create a product
        { method: 'PUT',    path: '/products', config: { handler: product.create } },

        // Update the product
        { method: 'POST',   path: '/products/{id}', config: { handler: product.update } },

        // Delete the product
        { method: 'DELETE', path: '/products/{id}', config: { handler: product.delete } },


        ///////////////////////////////////////////////////////////////////
        // ORDERS

        // Get all the orders
        { method: 'GET',    path: '/orders', config: { handler: order.getAll } },

        // Get the order with given id
        { method: 'GET',    path: '/orders/{id}', config: { handler: order.get } },

        // Get products of the an order
        { method: 'GET',    path: '/orders/{id}/products', config: { handler: order.getProducts } },

        // Create an order
        { method: 'PUT',    path: '/orders', config: { handler: order.create } },

        // Update the order
        { method: 'POST',   path: '/orders/{id}', config: { handler: order.update } },

        // Delete the order
        { method: 'DELETE', path: '/orders/{id}', config: { handler: order.delete } }

    ];
}