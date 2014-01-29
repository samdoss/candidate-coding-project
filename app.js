// import Hapi library
var Hapi = require('hapi');
var jspath = require('jspath');

// import route definition file
var routes = require('./config/routes');

// starts the server
var start = function () {

    var port = parseInt(process.env.VCAP_APP_PORT) || 8000;

    // create server
    var server = Hapi.createServer('localhost', port);

    // add the routes
    server.route(routes.getRoutes());

    // start!
    server.start(function () {
        console.log('Server started at: ' + server.info.uri);
    });
};

start();


