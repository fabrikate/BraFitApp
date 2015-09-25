var mongoose = require('mongoose');

var brandSchema = new mongoose.Schema({
  brandName: String,
  popularStyle: [String]
});

var Brand = mongoose.model('Brand', brandSchema);
module.exports = Brand;
