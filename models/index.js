var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/braFit_app');

module.exports.User = require('./user');
module.exports.Size = require('./size');
module.exports.Brand = require('./brand');
module.exports.wishList = require('./wishList');
