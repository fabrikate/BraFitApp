var mongoose = require('mongoose');

var brandSchema = new mongoose.Schema({
  brandName: String,
  popularStyles: [String],
  sizeRange: String
});

var Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
