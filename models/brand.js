var mongoose = require('mongoose');

var brandSchema = new mongoose.Schema({
  brandName: String,
  popularStyle: String,
  wishListStyles: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wishListStyles'
  },
});

var Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
