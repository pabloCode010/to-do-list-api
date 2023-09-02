const mongoose = require('mongoose');

module.exports = function(uri){
    return mongoose.connect(uri);
}