exports.check = function(request, reply){
    reply (JSON.stringify({
        status: true,
        errors: []
    }));
};