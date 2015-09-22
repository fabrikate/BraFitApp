var mongoose = require('mongoose');

var sizeSchema = new mongoose.Schema ({
  currentBandSize: String,
  currentCupSize: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  recommendedBandSize: Number,
  recommendedCupSize: String,
  cupStylePreference: [String],
});

var Size = mongoose.model('Size', sizeSchema);

module.exports = Size;
