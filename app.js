// import Hapi library
var Hapi = require('hapi');
var jspath = require('jspath');

// import route definition file
var routes = require('./config/routes');

// starts the server
var start = function () {

    // create server
    var server = Hapi.createServer('localhost', 8000);

    // add the routes
    server.route(routes.getRoutes());

    // start!
    server.start(function () {
        console.log('Server started at: ' + server.info.uri);
    });
};

start();


