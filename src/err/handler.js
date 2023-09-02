module.exports = function(err, req, res, next){
    //server error
    if(!err.isBoom && !err.isJoi){
        return res.status(500).json({
            statusCode: 500,
            error: "Internal Server Error", 
            message: "server error"
        });
    }
    // Joi errors
    if(err.isJoi){
        return res.status(400).json({
            statusCode: 400,
            error: "Bad Request", 
            details: err.details.map(detail => detail.message)
        });
    }
    //Boom errors
    const { statusCode } = err.output.payload;
    res.status(statusCode).json(err.output.payload);
}