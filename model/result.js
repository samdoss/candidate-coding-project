// Response object model
exports.Result = function (status, result ,error) {

    // Operation result - can be true or false
    this.status = status;

    // Resulting object for the request
    // Example: (GET /product/1) --> product information will be stored here:
    this.result = result || {};

    // Error(s)
    if(!error)
        this.error = [];
    else
        this.error = error;

}