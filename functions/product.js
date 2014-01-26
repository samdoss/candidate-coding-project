var products_data = require('../dummy-data/products.js');

exports.get = function(request, reply){

    reply();
};

exports.getAll = function(request, reply){

    reply(JSON.stringify(products_data.products));

};

exports.update = function(request, reply){
    reply();
};

exports.create = function(request, reply){
    reply();
};

exports.delete = function(request, reply){
    reply();
};