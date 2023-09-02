module.exports = function(err, req, res, next){
    //server error
    if(!err.isBoom){
        return res.status(500).json({
            statusCode: 500,
            error: "Internal Server Error", 
            message: "server error"
        });
    }
    //other errors
    const { statusCode } = err.output.payload;
    res.status(statusCode).json(err.output.payload);
}