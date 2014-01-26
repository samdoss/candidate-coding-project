// request response model
exports.Result = function (status, result ,error) {

    this.status = status;

    this.result = result || {};

    if(!error)
        this.error = [];
    else
        this.error = error;

}