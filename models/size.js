var mongoose = require('mongoose');

var sizeSchema = new mongoose.Schema ({
  currentSize: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  recommendedBandSize: Number,
  recommendedCupSize: String,
  cupStylePreference: [String],
});

var Size = mongoose.model('Size', sizeSchema);

module.exports = Size;
