var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//create user schema
var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  currentSize: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'currentSize'
  },
  wishList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'wishList'
  }]
})

// email and password authentication
userSchema.pre('save', function(next) {
  var user = this;
  if(!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.pre('remove', function(callback) {
  Size.remove({user: this._id}).exec();
  callback();
});

userSchema.methods.checkPassword = function(password, callback) {
  var user = this;
  bcrypt.compare(password, user.password, function(err, isMatch) {
    if( isMatch ) {
      callback(null, user);
    } else {
      callback(err, null);
    }
  });
};

userSchema.statics.authenticate = function(formData, callback) {
  this.findOne({
    email: formData.email
  }, function(err, user) {
    if(user === null) {
      callback('Invalid email or password', null);
    } else {
      user.checkPassword(formData.password, callback);
    }
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
