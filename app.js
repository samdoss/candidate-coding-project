// Importing required libraries and frameworks
var Hapi = require('hapi');
var jspath = require('jspath');

// Importing route definition file
var routes = require('./config/routes');

// Starts the server when called
var start = function () {

    // Decides which port to use
    // AppFog port env. variable: process.env.VCAP_APP_PORT
    var port = parseInt(process.env.VCAP_APP_PORT) || 8000;

    // Create server instance
    var server = Hapi.createServer('localhost', port);

    // Add the routes
    server.route(routes.getRoutes());

    // All set, start!
    server.start(function () {
        console.log('Server started at: ' + server.info.uri);
    });
};

start();


