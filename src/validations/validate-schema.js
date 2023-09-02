module.exports = function validateSchema(property, schema){
    return (req, res, next) => {
        try {
            const { error, value } = schema.validate(req[property], {abortEarly: false});
            if (error){
                error.isJoi = true;
                return next(error)
            }
            //default values
            req[property] = value;
            next();
        } catch (error) {
            next(error);
        }
    }
}