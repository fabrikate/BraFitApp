var mongoose = require('mongoose');

var wishListSchema = mongoose.Schema({
  brandName: String,
  brandStyle: String,
  size: String,
  user: ({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
});

var wishList = mongoose.model('wishList', wishListSchema);
module.exports = wishList;
